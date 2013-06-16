experiment('A second experiment to show that our new feature results in more of this happening', function () {
    
    group('A', function () {
        feature('new_feature2').turnOn();
    });
    
    group('B', function () {
        feature('new_feature2').turnOff();
    });
    
    measuredBy('successLogEvent2');
    
});