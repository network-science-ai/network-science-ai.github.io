(function() {
    if (!Array.isArray(NSIA_SPEAKERS) || !Array.isArray(NSIA_INVITED_TALKS)) {
        return;
    }

    const talksById = NSIA_INVITED_TALKS.reduce((acc, talk) => {
        acc[talk.id] = talk;
        return acc;
    }, {});

    const speakersById = NSIA_SPEAKERS.reduce((acc, speaker) => {
        acc[speaker.id] = speaker;
        return acc;
    }, {});

    const hasRealText = (value) => {
        if (!value) {
            return false;
        }
        return !String(value).trim().toLowerCase().includes("tbc");
    };

    const isSpeakerComplete = (speaker) => {
        const hasPhoto = Boolean(speaker.photo) && !speaker.photo.includes("speaker-placeholder");
        return (
            hasRealText(speaker.name) &&
            hasRealText(speaker.affiliation) &&
            hasRealText(speaker.bio) &&
            hasPhoto
        );
    };

    const getLastName = (fullName) => {
        if (!fullName) return "";
        const parts = fullName.trim().split(/\s+/);
        return parts[parts.length - 1];
    };

    const renderSpeakers = () => {
        const grid = document.getElementById("speakers-grid");
        if (!grid) {
            return;
        }

        grid.innerHTML = "";

        const sortedSpeakers = NSIA_SPEAKERS
            .filter(isSpeakerComplete)
            .sort((a, b) => {
                const lastNameA = getLastName(a.name).toLowerCase();
                const lastNameB = getLastName(b.name).toLowerCase();
                return lastNameA.localeCompare(lastNameB);
            });

        sortedSpeakers.forEach((speaker) => {
            const talk = talksById[speaker.slotId];
            const card = document.createElement("article");
            card.className = "speaker-card";
            card.id = speaker.id;

            const socials = [];
            if (speaker.links && speaker.links.x) {
                socials.push({
                    href: speaker.links.x,
                    label: "X",
                    icon: "icon-x"
                });
            }
            if (speaker.links && speaker.links.linkedin) {
                socials.push({
                    href: speaker.links.linkedin,
                    label: "LinkedIn",
                    icon: "icon-linkedin"
                });
            }
            if (speaker.links && speaker.links.website) {
                socials.push({
                    href: speaker.links.website,
                    label: "Website",
                    icon: "icon-website"
                });
            }
            if (speaker.links && speaker.links.googleScholar) {
                socials.push({
                    href: speaker.links.googleScholar,
                    label: "Google Scholar",
                    icon: "icon-scholar"
                });
            }

            const socialsMarkup = socials.length
                ? `<div class="speaker-socials">${socials
                      .map(
                          (link) =>
                              `<a class="social-link" href="${link.href}" target="_blank" rel="noopener" aria-label="${link.label}">
                                  <svg role="img" aria-hidden="true"><use href="#${link.icon}"></use></svg>
                              </a>`
                      )
                      .join("")}</div>`
                : "";

            const scheduleMarkup = talk
                ? `<div class="speaker-schedule">
                      Invited talk: ${talk.title}
                  </div>`
                : "";

            const titleMarkup = speaker.title
                ? `<div class="speaker-title">${speaker.title}</div>`
                : "";

            const affiliationMarkup = speaker.affiliation
                ? `<div class="speaker-affiliation">${speaker.affiliation}</div>`
                : "";

            card.innerHTML = `
                <div class="speaker-photo">
                    <img src="${speaker.photo}" alt="${speaker.name}">
                </div>
                <div class="speaker-content">
                    <div class="speaker-name">${speaker.name}</div>
                    ${titleMarkup}
                    ${affiliationMarkup}
                    <p class="speaker-bio">${speaker.bio}</p>
                    ${scheduleMarkup}
                    ${socialsMarkup}
                </div>
            `;

            grid.appendChild(card);
        });
    };

    const renderScheduleSlots = () => {
        const slots = document.querySelectorAll("[data-slot-id]");
        if (!slots.length) {
            return;
        }

        slots.forEach((row) => {
            const slotId = row.getAttribute("data-slot-id");
            const talk = talksById[slotId];
            const timeCell = row.querySelector(".time");
            const titleCell = row.querySelector(".talk-title");
            const speakerCell = row.querySelector(".speaker");

            if (!talk) {
                if (timeCell) {
                    timeCell.textContent = "TBC";
                }
                if (titleCell) {
                    titleCell.textContent = "Title TBC";
                }
                if (speakerCell) {
                    speakerCell.textContent = "Speaker TBC";
                }
                return;
            }

            if (timeCell) {
                timeCell.textContent = talk.time;
            }
            if (titleCell) {
                titleCell.textContent = talk.title;
            }

            if (speakerCell) {
                const speaker = speakersById[talk.speakerId];
                if (speaker) {
                    speakerCell.innerHTML = `
                        <div class="speaker-placeholder">
                            <a href="speakers.html#${speaker.id}">${speaker.name}</a>
                        </div>
                        <div class="affiliation">${speaker.affiliation}</div>
                    `;
                } else {
                    speakerCell.textContent = "Speaker TBC";
                }
            }
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        renderSpeakers();
        renderScheduleSlots();
    });
})();
