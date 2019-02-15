class RecListModal {

    constructor() {
        var currentRecs = [];

        $(document).ready( () => {
            $.get("./RecListModal.html", (data) => {
                $("body").append($(data));
            });
        });
    }

    //TODO: functions to pull recs from DB and display them
}

const recList = new RecListModal();

// module.exports = recList;