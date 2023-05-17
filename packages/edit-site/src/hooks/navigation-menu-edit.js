/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { BlockControls } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { ToolbarButton } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { privateApis as routerPrivateApis } from '@wordpress/router';

/**
 * Internal dependencies
 */
import { useLink } from '../components/routes/link';
import { unlock } from '../private-apis';

const { useLocation } = unlock( routerPrivateApis );

function NavigationMenuEdit( { attributes } ) {
	const { ref } = attributes;
	const { params } = useLocation();
	const navigationMenu = useSelect(
		( select ) => {
			return select( coreStore ).getEntityRecord(
				'postType',
				'wp_navigation',
				// Ideally this should be an official public API.
				ref
			);
		},
		[ ref ]
	);

	const linkProps = useLink(
		{
			postId: navigationMenu?.id,
			postType: navigationMenu?.type,
			canvas: 'edit',
		},
		{
			// this applies to Navigation Menus as well.
			fromTemplateId: params.postId,
		}
	);

	if ( ! navigationMenu ) {
		return null;
	}

	return (
		<BlockControls group="other">
			<ToolbarButton
				{ ...linkProps }
				onClick={ ( event ) => {
					linkProps.onClick( event );
				} }
			>
				{ __( 'Edit' ) }
			</ToolbarButton>
		</BlockControls>
	);
}

export const withEditBlockControls = createHigherOrderComponent(
	( BlockEdit ) => ( props ) => {
		const { attributes, name } = props;
		const isDisplayed = name === 'core/navigation' && attributes.ref;

		return (
			<>
				<BlockEdit { ...props } />
				{ isDisplayed && (
					<NavigationMenuEdit attributes={ attributes } />
				) }
			</>
		);
	},
	'withEditBlockControls'
);

addFilter(
	'editor.BlockEdit',
	'core/edit-site/navigation-edit-button',
	withEditBlockControls
);
