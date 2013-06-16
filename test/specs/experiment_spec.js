describe('Experiment', function () {

        beforeEach(function () {
  
        });

        it('should construct an initial experiment and set its description', function () {
            var experiment = new starter4ten.Experiment('Experiment to show');
            expect(experiment.description).toEqual('Experiment to show');
            expect(_.isObject(experiment.groups)).toBeTruthy();
        });

        it('should add a group function to is groups', function () {
            var experiment = new starter4ten.Experiment('Experiment to show');
            experiment.addGroup('A', function () { return; })
            expect(_.isFunction(experiment.groups['A'])).toBeTruthy();
        });

        it('should throw an error if no function specified when adding a group', function () {
            var experiment = new starter4ten.Experiment('Experiment to show');
            expect(function () { experiment.addGroup('A'); }).toThrow();
        });

        it('should throw an error if no string group id specified when adding a group', function () {
            var experiment = new starter4ten.Experiment('Experiment to show');
            expect(function () { experiment.addGroup(function () { return; }); }).toThrow();
        });  

        it('should set the measuredBy log event', function () {
            var experiment = new starter4ten.Experiment('Experiment to show');
            experiment.addMeasuredBy('logEvent')
            expect(experiment.measuredBy).toEqual('logEvent');
        });  

        it('should call the group definition function for specified group on startExperimentOnUser', function () {
            var experiment = new starter4ten.Experiment('Experiment to show');

            var result = 0;
            var fn = function () { result++; }
            experiment.addGroup('A', fn);

            experiment.startExperimentOnUser('A');

            expect(result).toEqual(1); 
        });  
        
    });