var starter4ten = {};

starter4ten.getLaboratory = function() {
  var lab = starter4ten.currentLab_ = starter4ten.currentLab_ || new starter4ten.Lab();
  return lab;
};

//The interface for the experiment definitions
var experiment = function (description, experimentFn) {
    return starter4ten.getLaboratory().experiment(description, experimentFn);
};

var group = function (groupId, groupDefinitionFn) {
    starter4ten.getLaboratory().group(groupId, groupDefinitionFn);
};

var measuredBy = function(measuredByLogEvent) {
    starter4ten.getLaboratory().measuredBy(measuredByLogEvent);
};