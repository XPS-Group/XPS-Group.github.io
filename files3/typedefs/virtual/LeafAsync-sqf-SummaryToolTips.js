﻿NDSummary.OnToolTipsLoaded("File3:typedefs/virtual/LeafAsync.sqf",{226:"<div class=\"NDToolTip TClass LSQF\"><div class=\"TTSummary\">&lt;TypeDefinition&gt;</div></div>",228:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype228\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">[]_self,_status] call [<span class=\"SHString\">&quot;callback&quot;</span>]</div></div><div class=\"TTSummary\">The callback which sets the status on the node after processTick has finished</div></div>",229:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype229\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;handle&quot;</span></div></div></div>",231:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype231\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_self call [<span class=\"SHString\">&quot;preTick&quot;</span>]</div></div><div class=\"TTSummary\">The code that executes before a Tick cycle of a Behaviour Tree. Usually sets node to RUNNING status.</div></div>",232:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype232\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;processTick&quot;</span>]</div></div><div class=\"TTSummary\">The code that executes during a Tick cycle of a Behaviour Tree and then returns a status to the callback method.</div></div>",234:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype234\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;postTick&quot;</span>,_status]</div></div><div class=\"TTSummary\">The code that executes after a Tick cycle of a Behaviour Tree and then sets the Status property before going back up the tree.</div></div>",237:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype237\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;Blackboard&quot;</span></div></div></div>",238:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype238\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;NodeType&quot;</span></div></div></div>",239:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype239\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;Status&quot;</span></div></div></div>",241:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype241\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;Halt&quot;</span>]</div></div><div class=\"TTSummary\">Halts a script called asynchronously</div></div>",242:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype242\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;Init&quot;</span>]</div></div><div class=\"TTSummary\">Initialization code usually called to reset the node.</div></div>",243:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype243\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;Tick&quot;</span>]</div></div><div class=\"TTSummary\">The code that begins the entire Tick cycle process. Calls proccessTick asynchronously. Status should be RUNNING in most cases until processTick has finished.</div></div>"});