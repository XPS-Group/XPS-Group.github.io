﻿/*
This file is part of Natural Docs, which is Copyright © 2003-2022 Code Clear LLC.
Natural Docs is licensed under version 3 of the GNU Affero General Public
License (AGPL).  Refer to License.txt or www.naturaldocs.org for the
complete details.

This file may be distributed with documentation files generated by Natural Docs.
Such documentation is not covered by Natural Docs' copyright and licensing,
and may have its own copyright and distribution terms as decided by its author.
*/

"use strict";var NDHomePage=new function(){this.Start=function(){var themeID=NDCore.GetQueryParam('Theme');if(themeID!=undefined){NDThemes.Apply(themeID);}window.addEventListener("message",this.OnMessage);};this.OnMessage=function(event){var message=event.data;if(message=="NoTheme"){NDThemes.Apply(undefined);}else if(message.StartsWith("Theme=")){var theme=message.slice(6);NDThemes.Apply(theme);}};};