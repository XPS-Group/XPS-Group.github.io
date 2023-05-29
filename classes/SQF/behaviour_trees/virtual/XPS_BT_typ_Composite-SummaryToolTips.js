﻿NDSummary.OnToolTipsLoaded("SQFClass:behaviour_trees.virtual.XPS_BT_typ_Composite",{277:"<div class=\"NDToolTip TClass LSQF\"><div class=\"TTSummary\">TypeDefinition</div></div>",283:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype283\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_self call [<span class=\"SHString\">&quot;preTick&quot;</span>]</div></div><div class=\"TTSummary\">The code that executes before a Tick cycle of a Behaviour Tree. Usually propogates down the tree if possible.</div></div>",285:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype285\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;processTick&quot;</span>]</div></div><div class=\"TTSummary\">The code that executes during a Tick cycle of a Behaviour Tree and then returns a status.</div></div>",287:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype287\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;postTick&quot;</span>,_status]</div></div><div class=\"TTSummary\">The code that executes after a Tick cycle of a Behaviour Tree and then sets the Status property before going back up the tree.</div></div>",289:"<div class=\"NDToolTip THMProtected LSQF\"><div id=\"NDPrototype289\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_status = _self call [<span class=\"SHString\">&quot;tickNextChild&quot;</span>]</div></div><div class=\"TTSummary\">Ticks next child in the array of children</div></div>",292:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype292\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;Blackboard&quot;</span></div></div></div>",293:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype293\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;NodeType&quot;</span></div></div></div>",294:"<div class=\"NDToolTip THMProperty LSQF\"><div id=\"NDPrototype294\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">get</span> <span class=\"SHString\">&quot;Status&quot;</span></div></div></div>",296:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype296\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">_result = createHashmapObject [<span class=\"SHString\">&quot;XPS_BT_typ_Composite&quot;</span>]</div></div></div>",297:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype297\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;AddChildNode&quot;</span>,[childNode,_index]]</div></div><div class=\"TTSummary\">Adds a child node at the specified index. If index is out of bounds or unspecified, it will append the child to the index.</div></div>",298:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype298\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;Init&quot;</span>]</div></div><div class=\"TTSummary\">Initialization code usually called to reset the node.</div></div>",299:"<div class=\"NDToolTip THMMethod LSQF\"><div id=\"NDPrototype299\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">call [<span class=\"SHString\">&quot;Tick&quot;</span>]</div></div><div class=\"TTSummary\">The code that begins the entire Tick cycle process.</div></div>"});