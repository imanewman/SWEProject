import EditableRecText from "./EditableRecText.js"

class RecTextFactory {
    static createTitleText(recModal) {
        let rec = recModal.getRec();

        return new EditableRecText(
            recModal,
            "#" + recModal.getRecId() + " .rec_item_title h3",
            50,
            (title) => { rec.setTitle(title) },
            () => { return rec.getTitle() }
        );
    }

    static createDateText(recModal) {
        let rec = recModal.getRec();

        return new EditableRecText(
            recModal,
            "#" + recModal.getRecId() + " .rec_item_time h5",
            60,
            (date) => { rec.setDateString(date) },
            () => {  return rec.getDateString() }
        );
    }

    static createLocationText(recModal) {
        let rec = recModal.getRec();

        return new EditableRecText(
            recModal,
            "#" + recModal.getRecId() + " .rec_item_location h5",
            50,
            (loc) => { rec.setLocation(loc) },
            () => { return rec.getLocation() }
        );
    }

    static createDescriptionText(recModal) {
        let rec = recModal.getRec();

        return new EditableRecText(
            recModal,
            "#" + recModal.getRecId() + " .rec_item_details_description p",
            500,
            (desc) => { rec.setDescription(desc) },
            () => { return rec.getDescription() }
        );
    }

    static createRulesText(recModal) {
        let rec = recModal.getRec();

        return new EditableRecText(
            recModal,
            "#" + recModal.getRecId() + " .rec_item_details_rules p",
            500,
            (rules) => { rec.setRules(rules) },
            () => {  return rec.getRules() }
        );
    }

    static createContactInfoText(recModal) {
        let rec = recModal.getRec();

        return new EditableRecText(
            recModal,
            "#" + recModal.getRecId() + " .rec_item_details_contact p",
            500,
            (info) => { rec.setContactInfo(info) },
            () => { return rec.getContactInfo() }
        );
    }

    static createWebsiteLinkText(recModal) {
        let rec = recModal.getRec();

        return new EditableRecText(
            recModal,
            "#" + recModal.getRecId() + " .rec_item_details_website a",
            150,
            (link) => { rec.setWebsiteLink(link) },
            () => { return rec.getWebsiteLink() },
            true
        );
    }

    static createAllEditableText(recModal) {
        let editableTexts = {};

        editableTexts['title'] = this.createTitleText(recModal);
        editableTexts['date'] = this.createDateText(recModal);
        editableTexts['location'] = this.createLocationText(recModal);
        editableTexts['description'] = this.createDescriptionText(recModal);
        editableTexts['rules'] = this.createRulesText(recModal);
        editableTexts['contactInfo'] = this.createContactInfoText(recModal);
        editableTexts['websiteLink'] = this.createWebsiteLinkText(recModal);

        return editableTexts;
    }
}

export default RecTextFactory;