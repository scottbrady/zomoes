define(
[
    'jquery',
    'underscore'
],
function(
    $,
    _
) {
    function Resume() {};

    _.extend(Resume.prototype, {

        initialize : function() {
            console.log($('#resumeId').text());
        }

    });

    return Resume;
});