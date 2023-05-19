/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import {
	__unstableMotion as motion,
	__unstableAnimatePresence as AnimatePresence,
	__unstableUseNavigateRegions as useNavigateRegions,
	ResizableBox,
} from '@wordpress/components';
import {
	useReducedMotion,
	useViewportMatch,
	useResizeObserver,
} from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { useState, useRef } from '@wordpress/element';
import { NavigableRegion } from '@wordpress/interface';
import { store as keyboardShortcutsStore } from '@wordpress/keyboard-shortcuts';
import {
	CommandMenu,
	privateApis as commandsPrivateApis,
} from '@wordpress/commands';
import { store as preferencesStore } from '@wordpress/preferences';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { privateApis as coreCommandsPrivateApis } from '@wordpress/core-commands';

/**
 * Internal dependencies
 */
import Sidebar from '../sidebar';
import Editor from '../editor';
import ListPage from '../list';
import ErrorBoundary from '../error-boundary';
import { store as editSiteStore } from '../../store';
import getIsListPage from '../../utils/get-is-list-page';
import Header from '../header-edit-mode';
import useInitEditedEntityFromURL from '../sync-state-with-url/use-init-edited-entity-from-url';
import SiteHub from '../site-hub';
import ResizeHandle from '../block-editor/resize-handle';
import useSyncCanvasModeWithURL from '../sync-state-with-url/use-sync-canvas-mode-with-url';
import { unlock } from '../../private-apis';
import SavePanel from '../save-panel';
import KeyboardShortcutsRegister from '../keyboard-shortcuts/register';
import KeyboardShortcutsGlobal from '../keyboard-shortcuts/global';
import { useEditModeCommands } from '../../hooks/commands/use-edit-mode-commands';

const { useCommands } = unlock( coreCommandsPrivateApis );
const { useCommandContext } = unlock( commandsPrivateApis );
const { useLocation } = unlock( routerPrivateApis );

const ANIMATION_DURATION = 0.5;
const emptyResizeHandleStyles = {
	position: undefined,
	userSelect: undefined,
	cursor: undefined,
	width: undefined,
	height: undefined,
	top: undefined,
	right: undefined,
	bottom: undefined,
	left: undefined,
};

export default function Layout() {
	// This ensures the edited entity id and type are initialized properly.
	useInitEditedEntityFromURL();
	useSyncCanvasModeWithURL();
	useCommands();
	useEditModeCommands();

	const hubRef = useRef();
	const { params } = useLocation();
	const isListPage = getIsListPage( params );
	const isEditorPage = ! isListPage;
	const { hasFixedToolbar, canvasMode, previousShortcut, nextShortcut } =
		useSelect( ( select ) => {
			const { getAllShortcutKeyCombinations } = select(
				keyboardShortcutsStore
			);
			const { getCanvasMode } = unlock( select( editSiteStore ) );
			return {
				canvasMode: getCanvasMode(),
				previousShortcut: getAllShortcutKeyCombinations(
					'core/edit-site/previous-region'
				),
				nextShortcut: getAllShortcutKeyCombinations(
					'core/edit-site/next-region'
				),
				hasFixedToolbar:
					select( preferencesStore ).get( 'fixedToolbar' ),
			};
		}, [] );
	const navigateRegionsProps = useNavigateRegions( {
		previous: previousShortcut,
		next: nextShortcut,
	} );
	const disableMotion = useReducedMotion();
	const isMobileViewport = useViewportMatch( 'medium', '<' );
	const canvasPadding = isMobileViewport ? 0 : 24;
	const showSidebar =
		( isMobileViewport && ! isListPage ) ||
		( ! isMobileViewport && ( canvasMode === 'view' || ! isEditorPage ) );
	const showCanvas =
		( isMobileViewport && isEditorPage && canvasMode === 'edit' ) ||
		! isMobileViewport ||
		! isEditorPage;
	const showFrame =
		( ! isEditorPage && ! isMobileViewport ) ||
		( ! isMobileViewport && isEditorPage && canvasMode === 'view' );
	const isFullCanvas =
		( isMobileViewport && isListPage ) ||
		( isEditorPage && canvasMode === 'edit' );
	const [ canvasResizer, canvasSize ] = useResizeObserver();
	const [ fullResizer, fullSize ] = useResizeObserver();
	const [ forcedWidth, setForcedWidth ] = useState( null );
	const [ isResizing, setIsResizing ] = useState( false );
	const isResizingEnabled = ! isMobileViewport && canvasMode === 'view';
	const defaultSidebarWidth = isMobileViewport ? '100vw' : 360;
	let canvasWidth = isResizing ? '100%' : fullSize.width;
	if ( showFrame && ! isResizing ) {
		canvasWidth = canvasSize.width - canvasPadding;
	}

	// Sets the right context for the command center
	const commandContext =
		canvasMode === 'edit' && isEditorPage
			? 'site-editor-edit'
			: 'site-editor';
	useCommandContext( commandContext );

	// Synchronizing the URL with the store value of canvasMode happens in an effect
	// This condition ensures the component is only rendered after the synchronization happens
	// which prevents any animations due to potential canvasMode value change.
	if ( canvasMode === 'init' ) {
		return null;
	}

	return (
		<>
			<CommandMenu />
			<KeyboardShortcutsRegister />
			<KeyboardShortcutsGlobal />
			{ fullResizer }
			<div
				{ ...navigateRegionsProps }
				ref={ navigateRegionsProps.ref }
				className={ classnames(
					'edit-site-layout',
					navigateRegionsProps.className,
					{
						'is-full-canvas': isFullCanvas,
						'is-edit-mode': canvasMode === 'edit',
						'has-fixed-toolbar': hasFixedToolbar,
					}
				) }
			>
				<SiteHub ref={ hubRef } className="edit-site-layout__hub" />

				<AnimatePresence initial={ false }>
					{ isEditorPage && canvasMode === 'edit' && (
						<NavigableRegion
							className="edit-site-layout__header"
							ariaLabel={ __( 'Editor top bar' ) }
							as={ motion.div }
							animate={ {
								y: 0,
							} }
							initial={ {
								y: '-100%',
							} }
							exit={ {
								y: '-100%',
							} }
							transition={ {
								type: 'tween',
								duration: disableMotion
									? 0
									: ANIMATION_DURATION,
								ease: 'easeOut',
							} }
						>
							<Header />
						</NavigableRegion>
					) }
				</AnimatePresence>

				<div className="edit-site-layout__content">
					<AnimatePresence initial={ false }>
						{ showSidebar && (
							<ResizableBox
								as={ motion.div }
								initial={ {
									opacity: 0,
								} }
								animate={ {
									opacity: 1,
								} }
								exit={ {
									opacity: 0,
								} }
								transition={ {
									type: 'tween',
									duration:
										disableMotion || isResizing
											? 0
											: ANIMATION_DURATION,
									ease: 'easeOut',
								} }
								size={ {
									height: '100%',
									width:
										isResizingEnabled && forcedWidth
											? forcedWidth
											: defaultSidebarWidth,
								} }
								className="edit-site-layout__sidebar"
								enable={ {
									right: isResizingEnabled,
								} }
								onResizeStop={ ( event, direction, elt ) => {
									setForcedWidth( elt.clientWidth );
									setIsResizing( false );
								} }
								onResizeStart={ () => {
									setIsResizing( true );
								} }
								onResize={ ( event, direction, elt ) => {
									// This is a performance optimization
									// We set the width imperatively to avoid re-rendering
									// the whole component while resizing.
									hubRef.current.style.width =
										elt.clientWidth - 48 + 'px';
								} }
								handleComponent={ {
									right: (
										<ResizeHandle
											direction="right"
											variation="separator"
											resizeWidthBy={ ( delta ) => {
												setForcedWidth(
													( forcedWidth ??
														defaultSidebarWidth ) +
														delta
												);
											} }
										/>
									),
								} }
								handleClasses={ undefined }
								handleStyles={ {
									right: emptyResizeHandleStyles,
								} }
								minWidth={ isResizingEnabled ? 320 : undefined }
								maxWidth={
									isResizingEnabled && fullSize
										? fullSize.width - 360
										: undefined
								}
							>
								<NavigableRegion
									ariaLabel={ __( 'Navigation' ) }
								>
									<Sidebar />
								</NavigableRegion>
							</ResizableBox>
						) }
					</AnimatePresence>

					<SavePanel />

					{ showCanvas && (
						<div
							className={ classnames(
								'edit-site-layout__canvas-container',
								{
									'is-resizing': isResizing,
								}
							) }
							style={ {
								paddingTop: showFrame ? canvasPadding : 0,
								paddingBottom: showFrame ? canvasPadding : 0,
							} }
						>
							{ canvasResizer }
							{ !! canvasSize.width && (
								<motion.div
									whileHover={
										isEditorPage && canvasMode === 'view'
											? {
													scale: 1.005,
													transition: {
														duration:
															disableMotion ||
															isResizing
																? 0
																: 0.5,
														ease: 'easeOut',
													},
											  }
											: {}
									}
									// Setting a transform property (in this case scale) on an element makes it act as a containing block for its descendents.
									// This means that the snackbar notices inside this component are repositioned to be relative to this element.
									// To avoid the snackbars jumping about we need to ensure that a transform property is always set.
									// Setting a scale of 1 is interpred by framer as no change, so once the animation completes
									// the transform property of this element is set to none, thus removing its role as a container block.
									// Instead we set the initial scale of this element to 1.000000000000001 so that there is always a transform property set.
									initial={ { scale: 1.000000000000001 } }
									layout="position"
									className="edit-site-layout__canvas"
									transition={ {
										type: 'tween',
										duration:
											disableMotion || isResizing
												? 0
												: ANIMATION_DURATION,
										ease: 'easeOut',
									} }
								>
									<motion.div
										style={ {
											position: 'absolute',
											top: 0,
											left: 0,
											bottom: 0,
										} }
										initial={ false }
										animate={ {
											width: canvasWidth,
										} }
										transition={ {
											type: 'tween',
											duration:
												disableMotion || isResizing
													? 0
													: ANIMATION_DURATION,
											ease: 'easeOut',
										} }
									>
										<ErrorBoundary>
											{ isEditorPage && <Editor /> }
											{ isListPage && <ListPage /> }
										</ErrorBoundary>
									</motion.div>
								</motion.div>
							) }
						</div>
					) }
				</div>
			</div>
		</>
	);
}
