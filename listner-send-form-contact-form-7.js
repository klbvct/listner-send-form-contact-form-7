<script>
document.addEventListener('wpcf7mailsent', function( event ) {
dataLayer.push({
        'event' : 'formComplete',
        'formId' : event.detail.contactFormId
    });
}, false );
</script>