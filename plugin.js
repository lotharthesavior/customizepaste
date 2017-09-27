
/**
 * Customize Paste
 *
 * @author Savio Resende <savio@savioresende.com.br>
 * @version Beta
 *
 * This is a CKEditor plugin to implement custom behaviour over the pasted data. Right now it is removing all the tags.
 *
 * How to:
 *
 * Step 1.
 * Just install the plugin on the "plugins" directory and and import it using: config.extraPlugins = 'customizepaste'.
 */

CKEDITOR.plugins.add( 'customizepaste', {
    init: function( editor ) {
        editor.on( 'paste', function( evt ) {

            // this is removing tags
            evt.data.dataValue = evt.data.dataValue.replace(/(<([^>]+)>)/ig,"");

        } );

    }
});