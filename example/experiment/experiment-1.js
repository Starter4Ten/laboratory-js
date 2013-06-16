experiment('An experiment to show that our new feature results in more of this happening', function () {
    
    group('A', function () {
        feature('new_feature').turnOn();
    });
    
    group('B', function () {
        feature('new_feature').turnOff();
    });
    
    measuredBy('successLogEvent');
    
});