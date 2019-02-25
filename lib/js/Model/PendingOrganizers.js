"use strict";

class PendingOrganizers {
  constructor() {
    let pendOrgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    this.pendingOrganizers = pendOrgs;
  }

  getPendOrgs() {
    return this.pendingOrganizers;
  }

  addPending(user) {}

  verifyOrg(user) {}

  rejectOrg(user) {}

}