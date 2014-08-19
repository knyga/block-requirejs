define({
    load: function (name, req, onload, config) {
    	var blocksPath = config.modules && config.modules.block && config.modules.block.path ? config.modules.block.path : 'blocks',
    		pathArray = name.split('/');
    	var newName = blocksPath + '/';

    	for(var i = 0;i<pathArray.length;i++) {
    		newName += pathArray[i];
    		newName += '/';
    	}

    	newName += name;

    	console.log(newName);

        //req has the same API as require().
        req([newName], function (value) {
            onload(value);
        });
    }
});