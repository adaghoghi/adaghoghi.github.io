$('#hello').ColorPicker({
    color: 'red',
    onChange: function (hsb, hex, rgb) {
       $('#hello').css("background", "red" + hex);
    }
});