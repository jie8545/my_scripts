/*
 特务集卡
 脚本没有自动开卡，会尝试领取开卡奖励
cron "5 10,18,20 * * *" jd_superBrandJK.js
*/

const $ = new Env('特务集卡');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe5db6=["\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x74\x6F\x4F\x62\x6A","\x0A\u6D3B\u52A8\u5730\u5740\uFF1A\u9996\u9875\u4E0B\u62C9\uFF0C\u9700\u8981\u5F00\u5361\u624D\u80FD\x31\x30\x30\x25\u96C6\u9F50\uFF0C\u6CA1\u6709\u5F00\u5361\u7684\u624B\u52A8\u5F00\uFF0C\u96C6\u9F50\u665A\u4E0A\x38\u70B9\u540E\u74DC\u5206\x0A","\x66\x6C\x61\x67","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x0A\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x0A\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x0A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x0A\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x73\x65\x72","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\u4E92\u52A9\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x0A","\x6E\x65\x65\x64","\x6D\x61\x78","\u53BB\u52A9\u529B\x3A","\x73\x75\x70\x65\x72\x42\x72\x61\x6E\x64\x44\x6F\x54\x61\x73\x6B","\x7B\x22\x73\x6F\x75\x72\x63\x65\x22\x3A\x22\x63\x61\x72\x64\x22\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x2C\x22\x65\x6E\x63\x72\x79\x70\x74\x50\x72\x6F\x6A\x65\x63\x74\x49\x64\x22\x3A\x22","\x65\x6E\x63\x72\x79\x70\x74\x50\x72\x6F\x6A\x65\x63\x74\x49\x64","\x22\x2C\x22\x65\x6E\x63\x72\x79\x70\x74\x41\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x49\x64\x22\x3A\x22","\x65\x6E\x63\x72\x79\x70\x74\x41\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x49\x64","\x22\x2C\x22\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x54\x79\x70\x65\x22\x3A\x32\x2C\x22\x69\x74\x65\x6D\x49\x64\x22\x3A\x22","\x69\x74\x65\x6D\x49\x64","\x22\x2C\x22\x61\x63\x74\x69\x6F\x6E\x54\x79\x70\x65\x22\x3A\x30\x7D","\x62\x69\x7A\x43\x6F\x64\x65","\x30","\u52A9\u529B\u6210\u529F","\x31\x30\x33","\u52A9\u529B\u5DF2\u6EE1","\x31\x30\x38","\u52A9\u529B\u6B21\u6570\u5DF2\u7528\u5B8C","\u52A9\u529B\u7ED3\u679C\uFF1A","\x62\x69\x7A\x4D\x73\x67","\x77\x61\x69\x74","\x73\x68\x6F\x77\x53\x65\x63\x6F\x6E\x64\x46\x6C\x6F\x6F\x72\x43\x61\x72\x64\x49\x6E\x66\x6F","\x7B\x22\x73\x6F\x75\x72\x63\x65\x22\x3A\x22\x63\x61\x72\x64\x22\x7D","\x7B\x7D","\x72\x65\x73\x75\x6C\x74","\x61\x63\x74\x69\x76\x69\x74\x79\x42\x61\x73\x65\x49\x6E\x66\x6F","\u672C\u671F\u6D3B\u52A8\u7ED3\u675F\uFF0C\u7B49\u5F85\u4E0B\u671F\u3002\u3002\u3002","\x73\x75\x70\x65\x72\x42\x72\x61\x6E\x64\x54\x61\x73\x6B\x4C\x69\x73\x74","\x2C\x22\x61\x73\x73\x69\x73\x74\x49\x6E\x66\x6F\x46\x6C\x61\x67\x22\x3A\x31\x7D","\x2C\u83B7\u53D6\u6D3B\u52A8\u8BE6\u60C5\u5931\u8D25\x32","\x74\x61\x73\x6B\x4C\x69\x73\x74","\x2C\u9ED1\u53F7","\x2C\u83B7\u53D6\u6D3B\u52A8\u8BE6\u60C5\u6210\u529F","\x61\x63\x74\x69\x76\x69\x74\x79\x43\x61\x72\x64\x49\x6E\x66\x6F","\x64\x69\x76\x69\x64\x65\x54\x69\x6D\x65\x53\x74\x61\x74\x75\x73","\x64\x69\x76\x69\x64\x65\x53\x74\x61\x74\x75\x73","\x63\x61\x72\x64\x53\x74\x61\x74\x75\x73","\x2C\u53BB\u74DC\u5206","\x73\x75\x70\x65\x72\x42\x72\x61\x6E\x64\x54\x61\x73\x6B\x4C\x6F\x74\x74\x65\x72\x79","\x22\x2C\x22\x74\x61\x67\x22\x3A\x22\x64\x69\x76\x69\x64\x65\x22\x7D","\u74DC\u5206\u7ED3\u679C\uFF1A","\x62\x65\x61\x6E\x4E\x75\x6D","\x75\x73\x65\x72\x41\x77\x61\x72\x64\x49\x6E\x66\x6F","\u8C46\x0A","\x2C\u5DF2\u74DC\u5206","\x2C\u672A\u96C6\u9F50\u6216\u8005\u672A\u5230\u74DC\u5206\u65F6\u95F4","\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x54\x79\x70\x65","\x63\x61\x72\x64\x41\x73\x73\x69\x73\x74\x42\x6F\x78\x52\x65\x73\x74","\x65\x78\x74","\u9886\u53D6\u52A9\u529B\u5956\u52B1","\x22\x7D","\u9886\u53D6\u7ED3\u679C\uFF1A","\x63\x6F\x6D\x70\x6C\x65\x74\x69\x6F\x6E\x46\x6C\x61\x67","\u4EFB\u52A1\uFF1A","\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x4E\x61\x6D\x65","\x2C\u5DF2\u5B8C\u6210","\x2C\u53BB\u6267\u884C","\x73\x68\x6F\x70\x70\x69\x6E\x67\x41\x63\x74\x69\x76\x69\x74\x79","\x2C\u4FE1\u606F\u5F02\u5E38","\x22\x2C\x22\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x54\x79\x70\x65\x22\x3A","\x2C\x22\x69\x74\x65\x6D\x49\x64\x22\x3A\x22","\u6267\u884C\u7ED3\u679C\uFF1A","\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70","\x62\x72\x61\x6E\x64\x4D\x65\x6D\x62\x65\x72\x4C\x69\x73\x74","\x73\x69\x67\x6E\x32","\u9996\u9875\u9650\u65F6\u4E0B\u62C9","\x73\x74\x61\x74\x75\x73","\x22\x2C\x22\x61\x63\x74\x69\x6F\x6E\x54\x79\x70\x65\x22\x3A\x30\x2C\x22\x64\x72\x6F\x70\x44\x6F\x77\x6E\x43\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x31\x7D","\u5C0F\u6E38\u620F","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x68\x6F\x77\x53\x65\x63\x6F\x6E\x64\x46\x6C\x6F\x6F\x72\x47\x61\x6D\x65\x49\x6E\x66\x6F","\x73\x65\x63\x43\x6F\x64\x65","\x67\x61\x6D\x65\x43\x75\x72\x72\x65\x6E\x74\x52\x65\x77\x61\x72\x64\x49\x6E\x66\x6F","\x61\x63\x74\x69\x76\x69\x74\x79\x47\x61\x6D\x65\x49\x6E\x66\x6F","\x22\x2C\x22\x73\x65\x63\x43\x6F\x64\x65\x22\x3A\x22","\x61\x73\x73\x69\x73\x74\x54\x61\x73\x6B\x44\x65\x74\x61\x69\x6C","\x73\x75\x70\x65\x72\x42\x72\x61\x6E\x64\x53\x68\x6F\x77\x4D\x79\x41\x77\x61\x72\x64","\x7D","\x72\x65\x77\x61\x72\x64\x4C\x69\x73\x74","\x72\x65\x77\x61\x72\x64\x54\x79\x70\x65","\x72\x65\x77\x61\x72\x64\x56\x61\x6C\x75\x65","\x0A","\x72\x65\x77\x61\x72\x64\x4E\x61\x6D\x65","\x75\x73\x65\x52\x61\x6E\x67\x65","\x3B","\x0A\u5DF2\u83B7\u5F97\u5956\u52B1\uFF1A\x0A","\u7279\u52A1\u96C6\u5361","\u53EF\u80FD\u83B7\u5F97\u5B9E\u7269\u5956\u52B1\x0A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x3F\x75\x75\x69\x64\x3D\x26\x63\x6C\x69\x65\x6E\x74\x3D\x77\x68\x35\x26\x61\x72\x65\x61\x3D\x32\x5F\x32\x38\x33\x30\x5F\x35\x31\x38\x32\x38\x5F\x30\x26\x61\x70\x70\x69\x64\x3D\x50\x72\x6F\x64\x75\x63\x74\x5A\x34\x42\x72\x61\x6E\x64\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x26\x74\x3D","\x6E\x6F\x77","\x26\x62\x6F\x64\x79\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x6F\x64\x65\x76\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x20\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x6F\x64\x65\x76\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x61\x6C\x6C\x2F\x61\x63\x74\x69\x76\x65\x2F\x34\x52\x41\x33\x45\x57\x64\x55\x73\x79\x6E\x6F\x50\x4B\x75\x69\x74\x45\x4C\x37\x39\x42\x4D\x35\x56\x4D\x67\x62\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x7A\x68\x2D\x63\x6E","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x70\x61\x72\x73\x65","\x64\x61\x74\x61","\x70\x6F\x73\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x2F\x69\x6E\x66\x6F\x2F\x51\x75\x65\x72\x79\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x2F\x6A\x69\x6E\x67\x64\x6F\x75\x2F\x6D\x79\x2E\x73\x68\x74\x6D\x6C\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x72\x65\x74\x63\x6F\x64\x65","\x62\x61\x73\x65","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E","\x6C\x6F\x67\x45\x72\x72","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[];if($[__Oxe5db6[0x0]]()){Object[__Oxe5db6[0x3]](jdCookieNode)[__Oxe5db6[0x2]]((_0x4675x2)=>{cookiesArr[__Oxe5db6[0x1]](jdCookieNode[_0x4675x2])});if(process[__Oxe5db6[0x5]][__Oxe5db6[0x4]]&& process[__Oxe5db6[0x5]][__Oxe5db6[0x4]]=== __Oxe5db6[0x6]){console[__Oxe5db6[0x7]]= ()=>{}}}else {cookiesArr= [$[__Oxe5db6[0xa]](__Oxe5db6[0x9]),$[__Oxe5db6[0xa]](__Oxe5db6[0xb]),...$[__Oxe5db6[0x10]]($[__Oxe5db6[0xa]](__Oxe5db6[0xe])|| __Oxe5db6[0xf])[__Oxe5db6[0xd]]((_0x4675x2)=>{return _0x4675x2[__Oxe5db6[0xc]]})][__Oxe5db6[0x8]]((_0x4675x2)=>{return !!_0x4675x2})};console[__Oxe5db6[0x7]](__Oxe5db6[0x11]);let shareList=[];$[__Oxe5db6[0x12]]= false;!(async ()=>{if(!cookiesArr[0x0]){$[__Oxe5db6[0x1d]]($[__Oxe5db6[0x17]],__Oxe5db6[0x1b],__Oxe5db6[0x1c],{'\x6F\x70\x65\x6E\x2D\x75\x72\x6C':__Oxe5db6[0x1c]});return};for(let _0x4675x5=0;_0x4675x5< cookiesArr[__Oxe5db6[0x1e]];_0x4675x5++){if(cookiesArr[_0x4675x5]){$[__Oxe5db6[0xc]]= cookiesArr[_0x4675x5];$[__Oxe5db6[0x1f]]= decodeURIComponent($[__Oxe5db6[0xc]][__Oxe5db6[0x20]](/pt_pin=([^; ]+)(?=;?)/)&& $[__Oxe5db6[0xc]][__Oxe5db6[0x20]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxe5db6[0x21]]= (_0x4675x5+ 1);$[__Oxe5db6[0x22]]= true;$[__Oxe5db6[0x23]]= __Oxe5db6[0x15];console[__Oxe5db6[0x7]](__Oxe5db6[0x24]+ $[__Oxe5db6[0x21]]+ __Oxe5db6[0x25]+ ($[__Oxe5db6[0x23]]|| $[__Oxe5db6[0x1f]])+ __Oxe5db6[0x26]);if(!$[__Oxe5db6[0x22]]){$[__Oxe5db6[0x1d]]($[__Oxe5db6[0x17]],__Oxe5db6[0x27],__Oxe5db6[0x28]+ $[__Oxe5db6[0x21]]+ __Oxe5db6[0x29]+ ($[__Oxe5db6[0x23]]|| $[__Oxe5db6[0x1f]])+ __Oxe5db6[0x2a],{'\x6F\x70\x65\x6E\x2D\x75\x72\x6C':__Oxe5db6[0x1c]});if($[__Oxe5db6[0x0]]()){ await notify[__Oxe5db6[0x2d]]($[__Oxe5db6[0x17]]+ __Oxe5db6[0x2b]+ $[__Oxe5db6[0x1f]],__Oxe5db6[0x28]+ $[__Oxe5db6[0x21]]+ __Oxe5db6[0x29]+ $[__Oxe5db6[0x1f]]+ __Oxe5db6[0x2c])};continue};try{ await main($[__Oxe5db6[0xc]]);if(_0x4675x5== 0&& $[__Oxe5db6[0x12]]){return}}catch(e){console[__Oxe5db6[0x7]](JSON[__Oxe5db6[0x2e]](e))}}};if(shareList[__Oxe5db6[0x1e]]=== 0){return};let _0x4675x6=[];for(let _0x4675x5=0;_0x4675x5< cookiesArr[__Oxe5db6[0x1e]];_0x4675x5++){let _0x4675x7=cookiesArr[_0x4675x5];let _0x4675x8=decodeURIComponent(_0x4675x7[__Oxe5db6[0x20]](/pt_pin=(.+?);/)&& _0x4675x7[__Oxe5db6[0x20]](/pt_pin=(.+?);/)[0x1]);for(let _0x4675x9=0;_0x4675x9< shareList[__Oxe5db6[0x1e]];_0x4675x9++){if(shareList[_0x4675x9][__Oxe5db6[0x2f]]=== _0x4675x8){_0x4675x6[__Oxe5db6[0x1]](shareList[_0x4675x9]);break}}};console[__Oxe5db6[0x7]](__Oxe5db6[0x30]);for(let _0x4675x5=0;_0x4675x5< cookiesArr[__Oxe5db6[0x1e]];_0x4675x5++){let _0x4675x7=cookiesArr[_0x4675x5];let _0x4675x8=decodeURIComponent(_0x4675x7[__Oxe5db6[0x20]](/pt_pin=(.+?);/)&& _0x4675x7[__Oxe5db6[0x20]](/pt_pin=(.+?);/)[0x1]);let _0x4675xa=true;for(let _0x4675x9=0;(_0x4675x9< _0x4675x6[__Oxe5db6[0x1e]])&& _0x4675xa;_0x4675x9++){let _0x4675xb=_0x4675x6[_0x4675x9];if((_0x4675xb[__Oxe5db6[0x2f]]=== _0x4675x8)|| (_0x4675xb[__Oxe5db6[0x31]]=== 0)|| _0x4675xb[__Oxe5db6[0x32]]){continue};console[__Oxe5db6[0x7]](__Oxe5db6[0x15]+ _0x4675x8+ __Oxe5db6[0x33]+ _0x4675xb[__Oxe5db6[0x2f]]);let _0x4675xc= await takeRequest(_0x4675x7,__Oxe5db6[0x34],__Oxe5db6[0x35]+ _0x4675xb[__Oxe5db6[0x36]]+ __Oxe5db6[0x37]+ _0x4675xb[__Oxe5db6[0x38]]+ __Oxe5db6[0x39]+ _0x4675xb[__Oxe5db6[0x3a]]+ __Oxe5db6[0x3b]+ _0x4675xb[__Oxe5db6[0x3c]]+ __Oxe5db6[0x3d]);if(_0x4675xc[__Oxe5db6[0x3e]]=== __Oxe5db6[0x3f]){console[__Oxe5db6[0x7]](__Oxe5db6[0x40])}else {if(_0x4675xc[__Oxe5db6[0x3e]]=== __Oxe5db6[0x41]){console[__Oxe5db6[0x7]](__Oxe5db6[0x42]);_0x4675xb[__Oxe5db6[0x32]]= true}else {if(_0x4675xc[__Oxe5db6[0x3e]]=== __Oxe5db6[0x43]){console[__Oxe5db6[0x7]](__Oxe5db6[0x44]);_0x4675xa= false}}};console[__Oxe5db6[0x7]](__Oxe5db6[0x45]+ _0x4675xc[__Oxe5db6[0x46]]); await $[__Oxe5db6[0x47]](2000)}}})()[__Oxe5db6[0x1a]]((_0x4675x4)=>{$[__Oxe5db6[0x7]](__Oxe5db6[0x15],__Oxe5db6[0x16]+ $[__Oxe5db6[0x17]]+ __Oxe5db6[0x18]+ _0x4675x4+ __Oxe5db6[0x19],__Oxe5db6[0x15])})[__Oxe5db6[0x14]](()=>{$[__Oxe5db6[0x13]]()});async function main(_0x4675xe){let _0x4675xf=decodeURIComponent(_0x4675xe[__Oxe5db6[0x20]](/pt_pin=(.+?);/)&& _0x4675xe[__Oxe5db6[0x20]](/pt_pin=(.+?);/)[0x1]);let _0x4675xc= await takeRequest(_0x4675xe,__Oxe5db6[0x48],__Oxe5db6[0x49]);if(JSON[__Oxe5db6[0x2e]](_0x4675xc)=== __Oxe5db6[0x4a]||  !_0x4675xc||  !_0x4675xc[__Oxe5db6[0x4b]]||  !_0x4675xc[__Oxe5db6[0x4b]][__Oxe5db6[0x4c]]){console[__Oxe5db6[0x7]](__Oxe5db6[0x4d]);$[__Oxe5db6[0x12]]= true;return};let _0x4675x10=_0x4675xc[__Oxe5db6[0x4b]][__Oxe5db6[0x4c]];let _0x4675x11=_0x4675x10[__Oxe5db6[0x36]];let _0x4675x12= await takeRequest(_0x4675xe,__Oxe5db6[0x4e],__Oxe5db6[0x35]+ _0x4675x11+ __Oxe5db6[0x4f]);if((JSON[__Oxe5db6[0x2e]](_0x4675x12)=== __Oxe5db6[0x4a])|| (JSON[__Oxe5db6[0x2e]](_0x4675xc)=== __Oxe5db6[0x4a])){console[__Oxe5db6[0x7]](_0x4675xf+ __Oxe5db6[0x50]);return};if(!_0x4675x12||  !_0x4675x12[__Oxe5db6[0x4b]] ||  !_0x4675x12[__Oxe5db6[0x4b]][__Oxe5db6[0x51]]){console[__Oxe5db6[0x7]](_0x4675xf+ __Oxe5db6[0x52]);return};let _0x4675x13=_0x4675x12[__Oxe5db6[0x4b]][__Oxe5db6[0x51]]|| [];console[__Oxe5db6[0x7]](__Oxe5db6[0x15]+ _0x4675xf+ __Oxe5db6[0x53]);let _0x4675x14=_0x4675x10[__Oxe5db6[0x38]];let _0x4675x15=_0x4675xc[__Oxe5db6[0x4b]][__Oxe5db6[0x54]];if((_0x4675x15[__Oxe5db6[0x55]]=== 1)&& (_0x4675x15[__Oxe5db6[0x56]]=== 0)&& _0x4675x15[__Oxe5db6[0x57]]=== 1){console[__Oxe5db6[0x7]](_0x4675xf+ __Oxe5db6[0x58]);let _0x4675x12= await takeRequest(_0x4675xe,__Oxe5db6[0x59],__Oxe5db6[0x35]+ _0x4675x11+ __Oxe5db6[0x37]+ _0x4675x14+ __Oxe5db6[0x5a]);console[__Oxe5db6[0x7]](__Oxe5db6[0x5b]+ _0x4675x12[__Oxe5db6[0x4b]][__Oxe5db6[0x5d]][__Oxe5db6[0x5c]]+ __Oxe5db6[0x5e]);return}else {if(_0x4675x15[__Oxe5db6[0x55]]=== 1&& _0x4675x15[__Oxe5db6[0x56]]=== 1&& (_0x4675x15[__Oxe5db6[0x57]]=== 1)){console[__Oxe5db6[0x7]](_0x4675xf+ __Oxe5db6[0x5f]);return}else {console[__Oxe5db6[0x7]](_0x4675xf+ __Oxe5db6[0x60])}}; await $[__Oxe5db6[0x47]](2000);for(let _0x4675x16=0;_0x4675x16< _0x4675x13[__Oxe5db6[0x1e]];_0x4675x16++){let _0x4675x17=_0x4675x13[_0x4675x16];if(_0x4675x17[__Oxe5db6[0x61]]=== 2){let _0x4675x18=_0x4675x17[__Oxe5db6[0x63]][__Oxe5db6[0x62]]|| __Oxe5db6[0x3f];for(let _0x4675x19=0;_0x4675x19< _0x4675x18;_0x4675x19++){console[__Oxe5db6[0x7]](__Oxe5db6[0x64]);let _0x4675x1a= await takeRequest(_0x4675xe,__Oxe5db6[0x59],__Oxe5db6[0x35]+ _0x4675x11+ __Oxe5db6[0x37]+ _0x4675x14+ __Oxe5db6[0x65]);console[__Oxe5db6[0x7]](__Oxe5db6[0x66]+ _0x4675x1a[__Oxe5db6[0x46]]); await $[__Oxe5db6[0x47]](3000)}};if(_0x4675x17[__Oxe5db6[0x67]]){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6a]);continue};if(_0x4675x17[__Oxe5db6[0x61]]=== 1){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6b]);let _0x4675x1b=_0x4675x17[__Oxe5db6[0x63]][__Oxe5db6[0x6c]][0x0][__Oxe5db6[0x3c]]|| __Oxe5db6[0x15];if(!_0x4675x1b){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6d])};let _0x4675x1c= await takeRequest(_0x4675xe,__Oxe5db6[0x34],__Oxe5db6[0x35]+ _0x4675x11+ __Oxe5db6[0x37]+ _0x4675x14+ __Oxe5db6[0x39]+ _0x4675x17[__Oxe5db6[0x3a]]+ __Oxe5db6[0x6e]+ _0x4675x17[__Oxe5db6[0x61]]+ __Oxe5db6[0x6f]+ _0x4675x1b+ __Oxe5db6[0x3d]);console[__Oxe5db6[0x7]](__Oxe5db6[0x70]+ _0x4675x1c[__Oxe5db6[0x46]]); await $[__Oxe5db6[0x47]](3000)};if(_0x4675x17[__Oxe5db6[0x61]]=== 3){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6b]);let _0x4675x1b=_0x4675x17[__Oxe5db6[0x63]][__Oxe5db6[0x71]][0x0][__Oxe5db6[0x3c]]|| __Oxe5db6[0x15];if(!_0x4675x1b){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6d])};let _0x4675x1c= await takeRequest(_0x4675xe,__Oxe5db6[0x34],__Oxe5db6[0x35]+ _0x4675x11+ __Oxe5db6[0x37]+ _0x4675x14+ __Oxe5db6[0x39]+ _0x4675x17[__Oxe5db6[0x3a]]+ __Oxe5db6[0x6e]+ _0x4675x17[__Oxe5db6[0x61]]+ __Oxe5db6[0x6f]+ _0x4675x1b+ __Oxe5db6[0x3d]);console[__Oxe5db6[0x7]](__Oxe5db6[0x70]+ _0x4675x1c[__Oxe5db6[0x46]]); await $[__Oxe5db6[0x47]](3000)};if(_0x4675x17[__Oxe5db6[0x61]]=== 7){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6b]);let _0x4675x1b=_0x4675x17[__Oxe5db6[0x63]][__Oxe5db6[0x72]][0x0][__Oxe5db6[0x3c]]|| __Oxe5db6[0x15];if(!_0x4675x1b){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6d])};let _0x4675x1c= await takeRequest(_0x4675xe,__Oxe5db6[0x34],__Oxe5db6[0x35]+ _0x4675x11+ __Oxe5db6[0x37]+ _0x4675x14+ __Oxe5db6[0x39]+ _0x4675x17[__Oxe5db6[0x3a]]+ __Oxe5db6[0x6e]+ _0x4675x17[__Oxe5db6[0x61]]+ __Oxe5db6[0x6f]+ _0x4675x1b+ __Oxe5db6[0x3d]);console[__Oxe5db6[0x7]](__Oxe5db6[0x70]+ _0x4675x1c[__Oxe5db6[0x46]]); await $[__Oxe5db6[0x47]](3000)};if(_0x4675x17[__Oxe5db6[0x61]]=== 5){let _0x4675x1d=_0x4675x17[__Oxe5db6[0x63]][__Oxe5db6[0x73]]|| [];if(_0x4675x1d[__Oxe5db6[0x1e]]=== 0){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6d])};if(_0x4675x17[__Oxe5db6[0x69]]=== __Oxe5db6[0x74]){for(let _0x4675x19=0;_0x4675x19< _0x4675x1d[__Oxe5db6[0x1e]];_0x4675x19++){if(_0x4675x1d[_0x4675x19][__Oxe5db6[0x75]]=== 1){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6b]);let _0x4675x1b=_0x4675x1d[_0x4675x19][__Oxe5db6[0x3c]];let _0x4675x1c= await takeRequest(_0x4675xe,__Oxe5db6[0x34],__Oxe5db6[0x35]+ _0x4675x11+ __Oxe5db6[0x37]+ _0x4675x14+ __Oxe5db6[0x39]+ _0x4675x17[__Oxe5db6[0x3a]]+ __Oxe5db6[0x6e]+ _0x4675x17[__Oxe5db6[0x61]]+ __Oxe5db6[0x6f]+ _0x4675x1b+ __Oxe5db6[0x76]);console[__Oxe5db6[0x7]](__Oxe5db6[0x70]+ _0x4675x1c[__Oxe5db6[0x46]]); await $[__Oxe5db6[0x47]](3000)}}}else {if(_0x4675x17[__Oxe5db6[0x69]][__Oxe5db6[0x78]](__Oxe5db6[0x77])!==  -1){for(let _0x4675x19=0;_0x4675x19< _0x4675x1d[__Oxe5db6[0x1e]];_0x4675x19++){if(_0x4675x1d[_0x4675x19][__Oxe5db6[0x75]]=== 1){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6b]);let _0x4675x1e= await takeRequest(_0x4675xe,__Oxe5db6[0x79],__Oxe5db6[0x49]);let _0x4675x1f=_0x4675x1e[__Oxe5db6[0x4b]][__Oxe5db6[0x7c]][__Oxe5db6[0x7b]][__Oxe5db6[0x7a]];let _0x4675x20=_0x4675x1e[__Oxe5db6[0x4b]][__Oxe5db6[0x7c]][__Oxe5db6[0x7b]][__Oxe5db6[0x3a]]; await $[__Oxe5db6[0x47]](3000);let _0x4675x1c= await takeRequest(_0x4675xe,__Oxe5db6[0x59],__Oxe5db6[0x35]+ _0x4675x11+ __Oxe5db6[0x37]+ _0x4675x14+ __Oxe5db6[0x39]+ _0x4675x20+ __Oxe5db6[0x7d]+ _0x4675x1f+ __Oxe5db6[0x65]);console[__Oxe5db6[0x7]](__Oxe5db6[0x70]+ _0x4675x1c[__Oxe5db6[0x46]]); await $[__Oxe5db6[0x47]](3000)}}}}};if(_0x4675x17[__Oxe5db6[0x61]]=== 2){let _0x4675x1b=_0x4675x17[__Oxe5db6[0x63]][__Oxe5db6[0x7e]][__Oxe5db6[0x3c]]|| __Oxe5db6[0x15];if(!_0x4675x1b){console[__Oxe5db6[0x7]](__Oxe5db6[0x68]+ _0x4675x17[__Oxe5db6[0x69]]+ __Oxe5db6[0x6d])};shareList[__Oxe5db6[0x1]]({'\x75\x73\x65\x72':_0x4675xf,'\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64':_0x4675x11,'\x65\x6E\x63\x72\x79\x70\x74\x50\x72\x6F\x6A\x65\x63\x74\x49\x64':_0x4675x14,'\x65\x6E\x63\x72\x79\x70\x74\x41\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x49\x64':_0x4675x17[__Oxe5db6[0x3a]],'\x69\x74\x65\x6D\x49\x64':_0x4675x1b,'\x6D\x61\x78':false})}}; await $[__Oxe5db6[0x47]](2000);let _0x4675x21= await takeRequest(_0x4675xe,__Oxe5db6[0x7f],__Oxe5db6[0x35]+ _0x4675x11+ __Oxe5db6[0x80]);let _0x4675x22=_0x4675x21[__Oxe5db6[0x4b]][__Oxe5db6[0x81]];let _0x4675x23=__Oxe5db6[0x15];let _0x4675x24=__Oxe5db6[0x15];for(let _0x4675x5=0;_0x4675x5< _0x4675x22[__Oxe5db6[0x1e]];_0x4675x5++){if(_0x4675x22[_0x4675x5][__Oxe5db6[0x82]]=== 3){_0x4675x24+= _0x4675x22[_0x4675x5][__Oxe5db6[0x83]]+ __Oxe5db6[0x84]}else {if(_0x4675x22[_0x4675x5][__Oxe5db6[0x82]]=== 7){_0x4675x24+= _0x4675x22[_0x4675x5][__Oxe5db6[0x85]]+ __Oxe5db6[0x29]+ _0x4675x22[_0x4675x5][__Oxe5db6[0x86]]+ __Oxe5db6[0x84]}else {_0x4675x24+= _0x4675x22[_0x4675x5][__Oxe5db6[0x83]]+ __Oxe5db6[0x84];_0x4675x23+= (_0x4675x22[_0x4675x5][__Oxe5db6[0x83]]+ __Oxe5db6[0x87])}}};if(_0x4675x24){console[__Oxe5db6[0x7]](__Oxe5db6[0x88]+ _0x4675x24)};if(_0x4675x23){ await notify[__Oxe5db6[0x2d]](__Oxe5db6[0x89],__Oxe5db6[0x28]+ _0x4675xf+ __Oxe5db6[0x8a]+ _0x4675x23)}}async function takeRequest(_0x4675xe,_0x4675x26,_0x4675x27){let _0x4675x28=__Oxe5db6[0x15];let _0x4675x29=__Oxe5db6[0x8b]+ _0x4675x26+ __Oxe5db6[0x8c]+ Date[__Oxe5db6[0x8d]]()+ __Oxe5db6[0x8e]+ encodeURIComponent(_0x4675x27);const _0x4675x2a={'\x4F\x72\x69\x67\x69\x6E':__Oxe5db6[0x8f],'\x43\x6F\x6F\x6B\x69\x65':_0x4675xe,'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxe5db6[0x90],'\x41\x63\x63\x65\x70\x74':__Oxe5db6[0x91],'\x52\x65\x66\x65\x72\x65\x72':__Oxe5db6[0x92],'\x48\x6F\x73\x74':__Oxe5db6[0x93],'\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74':$[__Oxe5db6[0x0]]()?process[__Oxe5db6[0x5]][__Oxe5db6[0x94]]?process[__Oxe5db6[0x5]][__Oxe5db6[0x94]]:require(__Oxe5db6[0x96])[__Oxe5db6[0x95]]:$[__Oxe5db6[0xa]](__Oxe5db6[0x97])?$[__Oxe5db6[0xa]](__Oxe5db6[0x97]):__Oxe5db6[0x98],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxe5db6[0x99],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxe5db6[0x9a]};let _0x4675x2b={'\x75\x72\x6C':_0x4675x29,'\x68\x65\x61\x64\x65\x72\x73':_0x4675x2a,'\x62\x6F\x64\x79':_0x4675x28};return  new Promise(async (_0x4675x2c)=>{$[__Oxe5db6[0x9d]](_0x4675x2b,(_0x4675x2d,_0x4675x2e,_0x4675x2f)=>{try{if(_0x4675x2d){console[__Oxe5db6[0x7]](_0x4675x2d)}else {_0x4675x2f= JSON[__Oxe5db6[0x9b]](_0x4675x2f);if(_0x4675x2f&& _0x4675x2f[__Oxe5db6[0x9c]]&& (JSON[__Oxe5db6[0x2e]](_0x4675x2f[__Oxe5db6[0x9c]])=== __Oxe5db6[0x4a])){console[__Oxe5db6[0x7]](JSON[__Oxe5db6[0x2e]](_0x4675x2f))}}}catch(e){console[__Oxe5db6[0x7]](_0x4675x2f)}finally{_0x4675x2c(_0x4675x2f[__Oxe5db6[0x9c]]|| {})}})})}function TotalBean(){return  new Promise(async (_0x4675x2c)=>{const _0x4675x2b={'\x75\x72\x6C':__Oxe5db6[0x9e],'\x68\x65\x61\x64\x65\x72\x73':{'\x41\x63\x63\x65\x70\x74':__Oxe5db6[0x9f],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxe5db6[0xa0],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxe5db6[0x9a],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxe5db6[0x99],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxe5db6[0x90],'\x43\x6F\x6F\x6B\x69\x65':$[__Oxe5db6[0xc]],'\x52\x65\x66\x65\x72\x65\x72':__Oxe5db6[0xa1],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':$[__Oxe5db6[0x0]]()?process[__Oxe5db6[0x5]][__Oxe5db6[0x94]]?process[__Oxe5db6[0x5]][__Oxe5db6[0x94]]:require(_0x3a2151)[__Oxe5db6[0x95]]:$[__Oxe5db6[0xa]](__Oxe5db6[0x97])?$[__Oxe5db6[0xa]](__Oxe5db6[0x97]):__Oxe5db6[0x98]}};$[__Oxe5db6[0x9d]](_0x4675x2b,(_0x4675x2d,_0x4675x2e,_0x4675x2f)=>{try{if(_0x4675x2d){console[__Oxe5db6[0x7]](__Oxe5db6[0x15]+ JSON[__Oxe5db6[0x2e]](_0x4675x2d));console[__Oxe5db6[0x7]]($[__Oxe5db6[0x17]]+ __Oxe5db6[0xa2])}else {if(_0x4675x2f){_0x4675x2f= JSON[__Oxe5db6[0x9b]](_0x4675x2f);if(_0x4675x2f[__Oxe5db6[0xa3]]=== 13){$[__Oxe5db6[0x22]]= false;return};if(_0x4675x2f[__Oxe5db6[0xa3]]=== 0){$[__Oxe5db6[0x23]]= _0x4675x2f[__Oxe5db6[0xa4]]&& _0x4675x2f[__Oxe5db6[0xa4]][__Oxe5db6[0xa5]]|| $[__Oxe5db6[0x1f]]}else {$[__Oxe5db6[0x23]]= $[__Oxe5db6[0x1f]]}}else {console[__Oxe5db6[0x7]](__Oxe5db6[0xa6])}}}catch(e){$[__Oxe5db6[0xa7]](e,_0x4675x2e)}finally{_0x4675x2c()}})})};;(function(_0x4675x31,_0x4675x32,_0x4675x33,_0x4675x34,_0x4675x35,_0x4675x16){_0x4675x16= __Oxe5db6[0xa8];_0x4675x34= function(_0x4675x36){if( typeof alert!== _0x4675x16){alert(_0x4675x36)};if( typeof console!== _0x4675x16){console[__Oxe5db6[0x7]](_0x4675x36)}};_0x4675x33= function(_0x4675x37,_0x4675x31){return _0x4675x37+ _0x4675x31};_0x4675x35= _0x4675x33(__Oxe5db6[0xa9],_0x4675x33(_0x4675x33(__Oxe5db6[0xaa],__Oxe5db6[0xab]),__Oxe5db6[0xac]));try{_0x4675x31= __encode;if(!( typeof _0x4675x31!== _0x4675x16&& _0x4675x31=== _0x4675x33(__Oxe5db6[0xad],__Oxe5db6[0xae]))){_0x4675x34(_0x4675x35)}}catch(e){_0x4675x34(_0x4675x35)}})({})


function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}