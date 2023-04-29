﻿NDSummary.OnToolTipsLoaded("File2:typedefs/virtual/LeafAsync.sqf",{146:"<div class=\"NDToolTip TClass LSQF\"><div class=\"TTSummary\">TypeDefinition</div></div>",148:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype148\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">[]_self,_status] call [<span class=\"SHString\">&quot;callback&quot;</span>]</div></div><div class=\"TTSummary\">The callback which sets the status on the node after processTick has finished</div></div>",149:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype149\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_self call [<span class=\"SHString\">&quot;preTick&quot;</span>]</div></div><div class=\"TTSummary\">The code that executes before a Tick cycle of a Behaviour Tree. Usually sets node to RUNNING status.</div></div>",150:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype150\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;processTick&quot;</span>]</div></div><div class=\"TTSummary\">The code that executes during a Tick cycle of a Behaviour Tree and then returns a status to the callback method.</div></div>",152:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype152\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;postTick&quot;</span>,_status]</div></div><div class=\"TTSummary\">The code that executes after a Tick cycle of a Behaviour Tree and then sets the Status property before going back up the tree.</div></div>",155:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype155\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;NodeType&quot;</span></div></div></div>",156:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype156\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;Status&quot;</span></div></div></div>",158:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype158\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;Init&quot;</span>]</div></div><div class=\"TTSummary\">Initialization code usually called to reset the node.</div></div>",159:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype159\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;Tick&quot;</span>]</div></div><div class=\"TTSummary\">The code that begins the entire Tick cycle process. Calls proccessTick asynchronously. Status should be RUNNING in most cases until processTick has finished.</div></div>"});