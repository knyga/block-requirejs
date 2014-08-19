##Requirejs block plugin
Requirejs block plugin allows you to write pathes to required elements without duplication of names in path. It may be useful in combination with BEM methodology: http://bem.info

Without this plugin you would write path like that: 'views/blocks/header/__navigation/__search/header__navigation__search' or 'views/blocks/header/navigation/search/headerNavigationSearch'.
But now you can do as follows: 'block!header/navigation/search' to get 'views/blocks/header/navigation/search/headerNavigationSearch'. And 'block!header/__navigation/__search' to get 'views/blocks/header/__navigation/__search/header__navigation__search'.

####Congurate
```javascript
require.config({
	...
	modules: {
		block: {
			path: '../blocks'
		}
	}
	...
```
If you do not add this configuration system will be adding 'blocks' as prefix insted of '../blocks'.

####Require block
```javascript
var NavigationView = require('block!head/__navigation');
```

Or equivalent:
```javascript
define(['block!head/__navigation'], NavigationView);
```

These would create next path to navigation blocks with path 'blocks/head/navigation/head__navigation'. 
###Licence
Requirejs block

Copyright (C) 2014  Oleksandr Knyga, oleksandrknyga@gmail.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
