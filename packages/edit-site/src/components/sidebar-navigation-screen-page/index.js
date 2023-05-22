/**
 * WordPress dependencies
 */
import { __, _x, sprintf } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	__experimentalUseNavigator as useNavigator,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalText as Text,
	ExternalLink,
	ResponsiveWrapper,
} from '@wordpress/components';
import {
	store as coreStore,
	useEntityRecord,
	useEntityRecords,
} from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { pencil } from '@wordpress/icons';
import { humanTimeDiff } from '@wordpress/date';
import { count as wordCount } from '@wordpress/wordcount';
import { getMediaDetails } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import SidebarNavigationScreen from '../sidebar-navigation-screen';
import { unlock } from '../../private-apis';
import { store as editSiteStore } from '../../store';
import SidebarButton from '../sidebar-button';
import SidebarNavigationSubtitle from '../sidebar-navigation-subtitle';
import SidebarDetails from '../sidebar-navigation-data-list';

// Taken from packages/editor/src/components/time-to-read/index.js.
const AVERAGE_READING_RATE = 189;
const POST_STATUS_LABELS = {
	publish: __( 'Published' ),
	future: __( 'Scheduled' ),
	draft: __( 'Draft' ),
	pending: __( 'Pending' ),
};

function getPageDetails( page ) {
	if ( ! page ) {
		return [];
	}
	const details = [
		{
			label: 'Parent',
			value: page?.parentTitle,
		},
	];

	if ( page?.templateTitle ) {
		details.push( {
			label: 'Template',
			value: page.templateTitle,
		} );
	}

	/*
	 * translators: If your word count is based on single characters (e.g. East Asian characters),
	 * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
	 * Do not translate into your own language.
	 */
	const wordCountType = _x( 'words', 'Word count type. Do not translate!' );
	const wordsCounted = page?.content?.raw
		? wordCount( page.content.raw, wordCountType )
		: 0;
	const readingTime = Math.round( wordsCounted / AVERAGE_READING_RATE );

	if ( wordsCounted ) {
		details.push(
			{
				label: 'Words',
				value: wordsCounted.toLocaleString() || __( 'Unknown' ),
			},
			{
				label: 'Time to read',
				value:
					readingTime > 1
						? sprintf(
								/* translators: %s: is the number of minutes. */
								__( '%s mins' ),
								readingTime.toLocaleString()
						  )
						: __( '< 1 min' ),
			}
		);
	}
	return details;
}

export default function SidebarNavigationScreenPage() {
	const { setCanvasMode } = unlock( useDispatch( editSiteStore ) );
	const {
		params: { postId },
	} = useNavigator();

	const { record } = useEntityRecord( 'postType', 'page', postId );

	/*
	 * Only custom template slugs are available in the post entity record
	 * Pages using theme templates will not have a template slug.
	 */
	const { records: templates, isResolving: areTemplatesLoading } =
		useEntityRecords( 'postType', 'wp_template', {
			per_page: -1,
		} );
	const templateTitle = areTemplatesLoading
		? ''
		: templates?.find( ( template ) => template?.slug === record?.template )
				?.title?.rendered || '';

	const {
		parentTitle,
		featuredMediaDetails: { mediaWidth, mediaHeight, mediaSourceUrl },
	} = useSelect(
		( select ) => {
			// Featured image.
			const { getMedia } = select( coreStore );
			const featuredMedia = record?.featured_media
				? getMedia( record?.featured_media, { context: 'view' } )
				: null;

			// Parent page title.
			const parent = record?.parent
				? select( coreStore ).getEntityRecord(
						'postType',
						'page',
						record.parent
				  )
				: null;
			let _parentTitle = __( 'Top level' );
			if ( parent ) {
				_parentTitle = parent?.title?.rendered
					? decodeEntities( parent.title.rendered )
					: __( 'Untitled' );
			}

			return {
				parentTitle: _parentTitle,
				featuredMediaDetails: getMediaDetails( featuredMedia, postId ),
			};
		},
		[ record ]
	);

	return (
		<SidebarNavigationScreen
			title={ record ? decodeEntities( record?.title?.rendered ) : null }
			actions={
				<SidebarButton
					onClick={ () => setCanvasMode( 'edit' ) }
					label={ __( 'Edit' ) }
					icon={ pencil }
				/>
			}
			meta={
				record ? (
					<VStack spacing={ 3 }>
						{ record?.link && (
							<ExternalLink
								className="edit-site-sidebar-navigation-screen__page-link"
								href={ record.link }
							>
								{ record.link }
							</ExternalLink>
						) }
						<HStack alignment="left" spacing={ 3 }>
							<Text>
								{ POST_STATUS_LABELS?.[ record.status ] ||
									__( 'Unknown' ) }
							</Text>
							<Text>{ humanTimeDiff( record.date ) }</Text>
						</HStack>
					</VStack>
				) : null
			}
			footer={
				record && (
					<HStack
						className="edit-site-sidebar-navigation-screen-page__modified"
						alignment="left"
						spacing={ 3 }
					>
						<div
							className="edit-site-sidebar-navigation-screen-page__avatar"
							aria-hidden="true"
						/>
						<Text>
							Last modified { humanTimeDiff( record.modified ) }
						</Text>
					</HStack>
				)
			}
			content={
				<>
					{ record?.featured_media && mediaSourceUrl && (
						<div className="edit-site-sidebar-navigation-screen-page__featured-media">
							<ResponsiveWrapper
								naturalWidth={ mediaWidth }
								naturalHeight={ mediaHeight }
								isInline
							>
								<img src={ mediaSourceUrl } alt="" />
							</ResponsiveWrapper>
						</div>
					) }
					{ record?.excerpt?.raw && (
						<Text
							className="edit-site-sidebar-navigation-screen-page__excerpt"
							truncate={ true }
							limit={ 200 }
						>
							{ decodeEntities( record?.excerpt?.raw ) }
						</Text>
					) }
					<SidebarNavigationSubtitle>
						Details
					</SidebarNavigationSubtitle>
					<SidebarDetails
						details={ getPageDetails( {
							parentTitle,
							templateTitle,
							...record,
						} ) }
					/>
				</>
			}
		/>
	);
}
