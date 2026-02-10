(function() {
    if (!Array.isArray(NSIA_SPEAKERS) || !Array.isArray(NSIA_INVITED_TALKS)) {
        return;
    }

    const hasRealText = (value) => {
        if (!value) {
            return false;
        }
        return !String(value).trim().toLowerCase().includes("tbc");
    };

    const list = document.getElementById("home-speaker-list");
    if (!list) {
        return;
    }

    const talksBySpeakerId = NSIA_INVITED_TALKS.reduce((acc, talk) => {
        if (talk && talk.speakerId) {
            acc[talk.speakerId] = talk;
        }
        return acc;
    }, {});

    const speakers = NSIA_SPEAKERS.filter((speaker) => {
        return hasRealText(speaker.name) && hasRealText(speaker.affiliation);
    });

    list.innerHTML = speakers
        .map((speaker) => {
            const talk = talksBySpeakerId[speaker.id];
            const talkTitle = talk && talk.title ? talk.title : "Talk TBC";
            const talkLink = talk && talk.id ? "schedule.html#" + talk.id : "schedule.html";
            const photo = speaker.photo ? speaker.photo : "images/speaker-placeholder.svg";
            return (
                "<article class=\"speaker-list-item\">" +
                    "<div class=\"speaker-list-avatar\">" +
                        "<img src=\"" + photo + "\" alt=\"" + speaker.name + "\">" +
                    "</div>" +
                    "<div class=\"speaker-list-body\">" +
                        "<div class=\"speaker-list-name\">" + speaker.name + "</div>" +
                        "<div class=\"speaker-list-affiliation\">" + speaker.affiliation + "</div>" +
                        "<div class=\"speaker-list-talk\"><a href=\"" + talkLink + "\">" + talkTitle + "</a></div>" +
                    "</div>" +
                "</article>"
            );
        })
        .join("");
})();
