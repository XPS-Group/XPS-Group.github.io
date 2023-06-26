﻿NDSummary.OnToolTipsLoaded("SQFClass:behaviour_trees.virtual.XPS_BT_typ_Composite",{226:"<div class=\"NDToolTip TClass LSQF\"><div class=\"TTSummary\">TypeDefinition</div></div>",232:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype232\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_self call [<span class=\"SHString\">&quot;preTick&quot;</span>]</div></div><div class=\"TTSummary\">The code that executes before a Tick cycle of a Behaviour Tree. Usually propogates down the tree if possible.</div></div>",234:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype234\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;processTick&quot;</span>]</div></div><div class=\"TTSummary\">The code that executes during a Tick cycle of a Behaviour Tree and then returns a status.</div></div>",236:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype236\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;postTick&quot;</span>,[_status]]</div></div><div class=\"TTSummary\">The code that executes after a Tick cycle of a Behaviour Tree and then sets the Status property before going back up the tree.</div></div>",238:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype238\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;tickNextChild&quot;</span>]</div></div><div class=\"TTSummary\">Ticks next child in the array of children</div></div>",241:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype241\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;Blackboard&quot;</span></div></div></div>",242:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype242\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;NodeType&quot;</span></div></div></div>",243:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype243\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;Status&quot;</span></div></div></div>",245:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype245\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_result = createHashmapObject [<span class=\"SHString\">&quot;XPS_BT_typ_Composite&quot;</span>]</div></div></div>",246:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype246\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;AddChildNode&quot;</span>,[childNode,_index]]</div></div><div class=\"TTSummary\">Adds a child node at the specified index. If index is out of bounds or unspecified, it will append the child to the index.</div></div>",247:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype247\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;Init&quot;</span>]</div></div><div class=\"TTSummary\">Initialization code usually called to reset the node.</div></div>",248:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype248\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;Tick&quot;</span>]</div></div><div class=\"TTSummary\">The code that begins the entire Tick cycle process.</div></div>"});