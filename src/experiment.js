starter4ten.Experiment = function (description) {
    
    this.description = description;
    this.groups = {};
    this.measuredBy = '';
    
};

starter4ten.Experiment.prototype.addGroup = function (id, groupDefinitionFn) {
    if (!_.isString(id)) { throw new Error('You must specify a group id'); }
    if (!_.isFunction(groupDefinitionFn)) { throw new Error('You must specify a function that defines the features for the group'); }
    this.groups[id] = groupDefinitionFn;
};

starter4ten.Experiment.prototype.addMeasuredBy = function (measuredByLogEvent) {
    this.measuredBy = measuredByLogEvent;
};

starter4ten.Experiment.prototype.startExperimentOnUser = function (userGroupId) {
    if (!_.isUndefined(this.groups[userGroupId])) {
        this.groups[userGroupId].apply();
    }
};
