laboratory-js
===============

Split testing javascript framework for experimenting on your users.

Server End Points
-----------------

As well s the client framework, a server end point is required to log events. This end ppint should except a POST request and should record the information supplied in the JSON body of the request. This which will include the eventName, user's group id, date and time.

Analysising the data
--------------------

From the event data recorded it is possible to query for the which group logged an event the most. The event that is specified as measuredBy for the experiment should indicate a success for the experiment. So if your user based is evenly and randomly split in to groups, the group with the highest number of success events over time should be the winner.

Defining an experiment
----------------------

Create a js file in the following format:

experiment('An experiment to show that our new feature results in more of this happening', function () {
    
    group('A', function () {
        feature('new_feature').turnOn();
    });
    
    group('B', function () {
        feature('new_feature').turnOff();
    });
    
    measuredBy('successLogEvent');
    
});


