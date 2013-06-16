//Define the laboratory that is the top level object of the experiments
starter4ten.Lab = function () {
    this.experiments = [];
};

starter4ten.Lab.prototype.startExperiments = function () {
    if (_.isUndefined(this.userGroup)) { throw new Error('You must set a url or function for the laboratory.userGroup so it knows what group a user belongs to.'); }
    if (_.isUndefined(this.eventLoggerUrl)) { throw new Error('You must set a url for the laboratory.eventLoggerUrl so that the laboratory can log the results'); }

    if (_.isFunction(this.userGroup)) {
        this.userGroupId = this.userGroup.apply();
    } else {
        //Go to the url and fetch the userGroupId from the JSON response
    }

    _.each(this.experiments, function (experiment) {
        experiment.startExperimentOnUser(this.userGroupId);
    }, this);
};

starter4ten.Lab.prototype.logEvent = function () {
    //TODO log the event to the event logger url
}

starter4ten.Lab.prototype.getUserGroupId = function () {
    return this.userGroupId;
}

starter4ten.Lab.prototype.experiment = function (description, experimentFn) {
    var experimentToReturn = new starter4ten.Experiment(description);
    
    this.experiments.push(experimentToReturn);

    this.currentExperiment = experimentToReturn;

    experimentFn.call(experimentToReturn);
    
    return experimentToReturn;
}

starter4ten.Lab.prototype.group = function (groupId, groupDefinitionFn) {
    this.currentExperiment.addGroup(groupId, groupDefinitionFn);
};

starter4ten.Lab.prototype.measuredBy = function(measuredByLogEvent) {
    this.currentExperiment.addMeasuredBy(measuredByLogEvent);
};