/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'List View', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.createNewPost();
	} );

	test( 'allows a user to drag a block to a new sibling position', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		// Insert a couple of blocks of different types.
		await editor.insertBlock( { name: 'core/heading' } );
		await editor.insertBlock( { name: 'core/image' } );
		await editor.insertBlock( { name: 'core/paragraph' } );

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		// The last inserted block should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Paragraph',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Ensure the setup is correct before dragging.
		await expect
			.poll( editor.getBlocks )
			.toMatchObject( [
				{ name: 'core/heading' },
				{ name: 'core/image' },
				{ name: 'core/paragraph' },
			] );

		// Drag the paragraph above the heading.
		const paragraphBlockItem = listView.getByRole( 'gridcell', {
			name: 'Paragraph',
			exact: true,
		} );
		const headingBlockItem = listView.getByRole( 'gridcell', {
			name: 'Heading',
			exact: true,
		} );
		await paragraphBlockItem.dragTo( headingBlockItem, { x: 0, y: 0 } );

		// Ensure the block was dropped correctly.
		await expect
			.poll( editor.getBlocks )
			.toMatchObject( [
				{ name: 'core/paragraph' },
				{ name: 'core/heading' },
				{ name: 'core/image' },
			] );
	} );

	// Check for regressions of https://github.com/WordPress/gutenberg/issues/38763.
	test( 'shows the correct amount of blocks after a block is removed in the canvas', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		// Insert a couple of blocks of different types.
		await editor.insertBlock( { name: 'core/image' } );
		await editor.insertBlock( { name: 'core/heading' } );
		await editor.insertBlock( { name: 'core/paragraph' } );

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		// The last inserted block should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Paragraph',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Go to the image block in List View.
		await pageUtils.pressKeys( 'ArrowUp', { times: 2 } );
		await expect(
			listView.getByRole( 'link', {
				name: 'Image',
			} )
		).toBeFocused();

		// Select the image block in the canvas.
		await page.keyboard.press( 'Enter' );
		const imageBlock = editor.canvas.getByRole( 'document', {
			name: 'Block: Image',
		} );
		await expect(
			imageBlock.getByRole( 'button', { name: 'Upload' } )
		).toBeFocused();
		await page.keyboard.press( 'ArrowUp' );
		await expect( imageBlock ).toBeFocused();

		// Delete the image block in the canvas.
		await page.keyboard.press( 'Backspace' );

		// List View should have two rows.
		await expect( listView.getByRole( 'row' ) ).toHaveCount( 2 );
	} );

	// Check for regression of https://github.com/WordPress/gutenberg/issues/39026.
	test( 'selects the previous block after removing the selected one', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		// Insert a couple of blocks of different types.
		await editor.insertBlock( { name: 'core/image' } );
		await editor.insertBlock( { name: 'core/heading' } );
		await editor.insertBlock( { name: 'core/paragraph' } );

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		// The last inserted block should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Paragraph',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Remove the Paragraph block via its options menu in List View.
		await listView
			.getByRole( 'button', { name: 'Options for Paragraph' } )
			.click();
		await page.getByRole( 'menuitem', { name: /Delete/i } ).click();

		// Heading block should be selected as previous block.
		await expect(
			editor.canvas.getByRole( 'document', {
				name: 'Block: Heading',
			} )
		).toBeFocused();
	} );

	// Check for regression of https://github.com/WordPress/gutenberg/issues/39026.
	test( 'selects the next block after removing the very first block', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		// Insert a couple of blocks of different types.
		await editor.insertBlock( { name: 'core/image' } );
		await editor.insertBlock( { name: 'core/heading' } );
		await editor.insertBlock( { name: 'core/paragraph' } );

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		// The last inserted block should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Paragraph',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Select the image block in List View.
		await pageUtils.pressKeys( 'ArrowUp', { times: 2 } );
		await expect(
			listView.getByRole( 'link', {
				name: 'Image',
			} )
		).toBeFocused();
		await page.keyboard.press( 'Enter' );

		// Remove the Image block via its options menu in List View.
		await listView
			.getByRole( 'button', { name: 'Options for Image' } )
			.click();
		await page.getByRole( 'menuitem', { name: /Delete/i } ).click();

		// Heading block should be selected as previous block.
		await expect(
			editor.canvas.getByRole( 'document', {
				name: 'Block: Heading',
			} )
		).toBeFocused();
	} );

	/**
	 * When all the blocks gets removed from the editor, it inserts a default
	 * paragraph block; make sure that paragraph block gets selected after
	 * removing blocks from ListView.
	 */
	test( 'selects the default paragraph block after removing all blocks', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		// Insert a couple of blocks of different types.
		await editor.insertBlock( { name: 'core/image' } );
		await editor.insertBlock( { name: 'core/heading' } );

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		// The last inserted block should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Heading',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Select the Image block as well.
		await pageUtils.pressKeys( 'shift+ArrowUp' );
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Image',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Remove both blocks.
		await listView
			.getByRole( 'button', { name: 'Options for Image' } )
			.click();
		await page.getByRole( 'menuitem', { name: /Delete blocks/i } ).click();

		// Newly created paragraph block should be selected.
		await expect(
			editor.canvas.getByRole( 'document', { name: /Empty block/i } )
		).toBeFocused();
	} );

	test( 'expands nested list items', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		await editor.insertBlock( { name: 'core/cover' } );

		// Click first color option from the block placeholder's color picker to
		// make the inner blocks appear.
		await editor.canvas
			.getByRole( 'document', { name: 'Block: Cover' } )
			.getByRole( 'button', { name: /Color: /i } )
			.first()
			.click();

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		// Things start off expanded.
		await expect(
			listView.getByRole( 'link', {
				name: 'Cover',
				expanded: true,
			} )
		).toBeVisible();

		// The child paragraph block should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Paragraph',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Collapse the Cover block.
		await listView
			.getByRole( 'gridcell', { name: 'Cover', exact: true } )
			.getByTestId( 'list-view-expander', { includeHidden: true } )
			// Force the click to bypass the visibility check. The expander is
			// intentionally aria-hidden. See the implementation for details.
			.click( { force: true } );

		// Check that we're collapsed.
		await expect( listView.getByRole( 'row' ) ).toHaveCount( 1 );

		// Click the Cover block List View item.
		await listView
			.getByRole( 'link', {
				name: 'Cover',
				expanded: false,
			} )
			.click();

		// Click the Cover block title placeholder.
		await editor.canvas
			.getByRole( 'document', { name: 'Block: Cover' } )
			.getByRole( 'document', { name: /Empty block/i } )
			.click();

		// The child paragraph block in List View should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Paragraph',
				exact: true,
				selected: true,
			} )
		).toBeVisible();
	} );

	test( 'moves focus to start/end of list with Home/End keys', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		// Insert a couple of blocks of different types.
		await editor.insertBlock( { name: 'core/image' } );
		await editor.insertBlock( { name: 'core/heading' } );
		await editor.insertBlock( { name: 'core/paragraph' } );
		await editor.insertBlock( { name: 'core/columns' } );
		await editor.insertBlock( { name: 'core/group' } );

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		// The last inserted block should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Group',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Press Home to go to the first inserted block (image).
		await page.keyboard.press( 'Home' );
		await expect(
			listView.getByRole( 'link', {
				name: 'Image',
			} )
		).toBeFocused();

		// Press End followed by Arrow Up to go to the second to last block (columns).
		await page.keyboard.press( 'End' );
		await page.keyboard.press( 'ArrowUp' );
		await expect(
			listView.getByRole( 'link', {
				name: 'Columns',
				exact: true,
			} )
		).toBeFocused();

		// Navigate the right column to image block options button via Home key.
		await page.keyboard.press( 'ArrowRight' );
		await page.keyboard.press( 'Home' );
		await expect(
			listView.getByRole( 'button', { name: 'Options for Image' } )
		).toBeFocused();

		// Navigate the right column to group block options button.
		await page.keyboard.press( 'End' );
		await expect(
			listView.getByRole( 'button', { name: 'Options for Group' } )
		).toBeFocused();
	} );

	// If list view sidebar is open and focus is not inside the sidebar, move
	// focus to the sidebar when using the shortcut. If focus is inside the
	// sidebar, shortcut should close the sidebar.
	test( 'ensures List View global shortcut works properly', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		await editor.insertBlock( { name: 'core/image' } );
		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Paragraph text' },
		} );
		await expect(
			editor.canvas.getByRole( 'document', {
				name: 'Paragraph block',
			} )
		).toBeFocused();

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		// The paragraph item should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Paragraph',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Navigate to the image block item.
		await page.keyboard.press( 'ArrowUp' );
		const imageItem = listView.getByRole( 'link', {
			name: 'Image',
		} );

		await expect( imageItem ).toBeFocused();

		// Hit enter to focus the Image block.
		await page.keyboard.press( 'Enter' );
		await expect(
			editor.canvas
				.getByRole( 'document', {
					name: 'Block: Image',
				} )
				.getByRole( 'button', { name: 'Upload' } )
		).toBeFocused();

		// Since focus is now at the image block upload button in the canvas,
		// pressing the list view shortcut should bring focus back to the image
		// block in the list view.
		await pageUtils.pressKeys( 'access+o' );
		await expect( imageItem ).toBeFocused();

		// Since focus is now inside the list view, the shortcut should close
		// the sidebar.
		await pageUtils.pressKeys( 'access+o' );

		// Focus should now be on the paragraph block since that is
		// where we opened the list view sidebar. This is not a perfect
		// solution, but current functionality prevents a better way at
		// the moment.
		await expect(
			editor.canvas.getByRole( 'document', { name: 'Paragraph block' } )
		).toBeFocused();

		// List View should be closed.
		await expect( listView ).not.toBeVisible();

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );

		// Focus the list view close button and make sure the shortcut will
		// close the list view. This is to catch a bug where elements could be
		// out of range of the sidebar region. Must shift+tab 3 times to reach
		// close button before tabs.
		await pageUtils.pressKeys( 'shift+Tab' );
		await pageUtils.pressKeys( 'shift+Tab' );
		await pageUtils.pressKeys( 'shift+Tab' );
		await expect(
			editor.canvas
				.getByRole( 'region', { name: 'Document Overview' } )
				.getByRole( 'button', {
					name: 'Close',
				} )
		).toBeFocused();

		// Close List View and ensure it's closed.
		await pageUtils.pressKeys( 'access+o' );
		await expect( listView ).not.toBeVisible();

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );

		// Focus the outline tab and select it. This test ensures the outline
		// tab receives similar focus events based on the shortcut.
		await pageUtils.pressKeys( 'shift+Tab' );
		const outlineButton = editor.canvas.getByRole( 'button', {
			name: 'Outline',
		} );
		await expect( outlineButton ).toBeFocused();
		await page.keyboard.press( 'Enter' );

		// From here, tab in to the editor so focus can be checked on return to
		// the outline tab in the sidebar.
		await pageUtils.pressKeys( 'Tab', { times: 2 } );
		// Focus should be placed on the outline tab button since there is
		// nothing to focus inside the tab itself.
		await pageUtils.pressKeys( 'access+o' );
		await expect( outlineButton ).toBeFocused();

		// Close List View and ensure it's closed.
		await pageUtils.pressKeys( 'access+o' );
		await expect( listView ).not.toBeVisible();
	} );

	test( 'should place focus on the currently selected block in the canvas', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		// Insert a couple of blocks of different types.
		await editor.insertBlock( { name: 'core/image' } );
		await editor.insertBlock( { name: 'core/heading' } );
		await editor.insertBlock( { name: 'core/paragraph' } );

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		// The last inserted block should be selected.
		await expect(
			listView.getByRole( 'gridcell', {
				name: 'Paragraph',
				exact: true,
				selected: true,
			} )
		).toBeVisible();

		// Go to the image block in List View.
		await pageUtils.pressKeys( 'ArrowUp', { times: 2 } );
		await expect(
			listView.getByRole( 'link', {
				name: 'Image',
			} )
		).toBeFocused();

		// Select the image block in the canvas.
		await page.keyboard.press( 'Enter' );
		const imageBlock = editor.canvas.getByRole( 'document', {
			name: 'Block: Image',
		} );
		await expect(
			imageBlock.getByRole( 'button', { name: 'Upload' } )
		).toBeFocused();

		// Triggering the List View shortcut should result in the image block gaining focus.
		await pageUtils.pressKeys( 'access+o' );
		await expect(
			listView.getByRole( 'link', {
				name: 'Image',
			} )
		).toBeFocused();
	} );

	test( 'should delete blocks using keyboard', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		// Insert some blocks of different types.
		await editor.insertBlock( {
			name: 'core/group',
			innerBlocks: [ { name: 'core/pullquote' } ],
		} );
		await editor.insertBlock( {
			name: 'core/columns',
			innerBlocks: [
				{
					name: 'core/column',
					innerBlocks: [
						{ name: 'core/heading' },
						{ name: 'core/paragraph' },
					],
				},
				{
					name: 'core/column',
					innerBlocks: [ { name: 'core/verse' } ],
				},
			],
		} );
		await editor.insertBlock( { name: 'core/file' } );

		// Open List View.
		await pageUtils.pressKeys( 'access+o' );
		const listView = page.getByRole( 'treegrid', {
			name: 'Block navigation structure',
		} );

		async function getBlocksWithA11yAttributes() {
			const selectedRows = await listView
				.getByRole( 'row' )
				.filter( {
					has: page.getByRole( 'gridcell', { selected: true } ),
				} )
				.all();
			const selectedClientIds = await Promise.all(
				selectedRows.map( ( row ) => row.getAttribute( 'data-block' ) )
			);
			const focusedClientId = await listView
				.getByRole( 'row' )
				.filter( { has: page.locator( ':focus' ) } )
				.last()
				.getAttribute( 'data-block' );
			// Don't use the util to get the unmodified default block when it's empty.
			const blocks = await page.evaluate( () =>
				window.wp.data.select( 'core/block-editor' ).getBlocks()
			);
			function recursivelyApplyAttributes( _blocks ) {
				return _blocks.map( ( block ) => ( {
					name: block.name,
					selected: selectedClientIds.includes( block.clientId ),
					focused: block.clientId === focusedClientId,
					innerBlocks: recursivelyApplyAttributes(
						block.innerBlocks
					),
				} ) );
			}
			return recursivelyApplyAttributes( blocks );
		}

		await expect
			.poll(
				getBlocksWithA11yAttributes,
				'The last inserted block should be selected and focused.'
			)
			.toMatchObject( [
				{ name: 'core/group' },
				{ name: 'core/columns' },
				{ name: 'core/file', selected: true, focused: true },
			] );

		await page.keyboard.press( 'Delete' );
		await expect
			.poll(
				getBlocksWithA11yAttributes,
				'Deleting a block should move focus to the previous block'
			)
			.toMatchObject( [
				{ name: 'core/group' },
				{ name: 'core/columns', selected: true, focused: true },
			] );

		// Expand the current column.
		await page.keyboard.press( 'ArrowRight' );
		await page.keyboard.press( 'ArrowDown' );
		await page.keyboard.press( 'ArrowDown' );
		await expect
			.poll(
				getBlocksWithA11yAttributes,
				'Move focus but do not select the second column'
			)
			.toMatchObject( [
				{ name: 'core/group' },
				{
					name: 'core/columns',
					selected: true,
					innerBlocks: [
						{ name: 'core/column' },
						{ name: 'core/column', focused: true },
					],
				},
			] );

		await page.keyboard.press( 'Delete' );
		await expect
			.poll(
				getBlocksWithA11yAttributes,
				'Deleting a inner block moves focus to the previous inner block'
			)
			.toMatchObject( [
				{ name: 'core/group' },
				{
					name: 'core/columns',
					selected: false,
					innerBlocks: [
						{
							name: 'core/column',
							selected: true,
							focused: true,
						},
					],
				},
			] );

		// Expand the current column.
		await page.keyboard.press( 'ArrowRight' );
		// Move focus and select the Heading block.
		await listView
			.getByRole( 'gridcell', { name: 'Heading', exact: true } )
			.dblclick();
		// Select both inner blocks in the column.
		await page.keyboard.press( 'Shift+ArrowDown' );

		await page.keyboard.press( 'Backspace' );
		await expect
			.poll(
				getBlocksWithA11yAttributes,
				'Deleting multiple blocks moves focus to the parent block'
			)
			.toMatchObject( [
				{ name: 'core/group' },
				{
					name: 'core/columns',
					innerBlocks: [
						{
							name: 'core/column',
							selected: true,
							focused: true,
							innerBlocks: [],
						},
					],
				},
			] );

		// Move focus and select the first block.
		await listView
			.getByRole( 'gridcell', { name: 'Group', exact: true } )
			.dblclick();
		await page.keyboard.press( 'Backspace' );
		await expect
			.poll(
				getBlocksWithA11yAttributes,
				'Deleting the first block moves focus to the second block'
			)
			.toMatchObject( [
				{
					name: 'core/columns',
					selected: true,
					focused: true,
				},
			] );

		// Keyboard shortcut should also work.
		await pageUtils.pressKeys( 'access+z' );
		await expect
			.poll(
				getBlocksWithA11yAttributes,
				'Deleting the only block left will create a default block and focus/select it'
			)
			.toMatchObject( [
				{
					name: 'core/paragraph',
					selected: true,
					focused: true,
				},
			] );
	} );
} );
