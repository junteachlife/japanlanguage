// ============================================================
// JLPT N5・N4 核心詞彙資料庫
// 原則：
// 1. 不使用複製單字湊數
// 2. 每個單字都有級別、讀音、中文、例句
// 3. 每個例句都有假名讀音與中文翻譯
// 4. level 僅作本站學習分級，不宣稱為 JLPT 官方固定詞表
// ============================================================

const vocabCategories = [

{
id:"food",
icon:"🍱",
name:"飲食・餐廳・食材",
items:[

{
id:"food001",level:"N5",
jp:"りんご",read:"りんご",romaji:"ringo",zh:"蘋果",
stJp:"毎朝りんごを食べます。",
stRead:"まいあさりんごをたべます",
stZh:"每天早上吃蘋果。"
},

{
id:"food002",level:"N5",
jp:"みかん",read:"みかん",romaji:"mikan",zh:"橘子",
stJp:"みかんを二つ買いました。",
stRead:"みかんをふたつかいました",
stZh:"買了兩個橘子。"
},

{
id:"food003",level:"N5",
jp:"バナナ",read:"ばなな",romaji:"banana",zh:"香蕉",
stJp:"朝ご飯にバナナを食べます。",
stRead:"あさごはんにばななをたべます",
stZh:"早餐吃香蕉。"
},

{
id:"food004",level:"N5",
jp:"水",read:"みず",romaji:"mizu",zh:"水",
stJp:"冷たい水を飲みます。",
stRead:"つめたいみずをのみます",
stZh:"喝冰水。"
},

{
id:"food005",level:"N5",
jp:"お茶",read:"おちゃ",romaji:"ocha",zh:"茶",
stJp:"温かいお茶を飲みます。",
stRead:"あたたかいおちゃをのみます",
stZh:"喝熱茶。"
},

{
id:"food006",level:"N5",
jp:"肉",read:"にく",romaji:"niku",zh:"肉",
stJp:"私は肉が好きです。",
stRead:"わたしはにくがすきです",
stZh:"我喜歡吃肉。"
},

{
id:"food007",level:"N5",
jp:"魚",read:"さかな",romaji:"sakana",zh:"魚",
stJp:"晩ご飯に魚を食べました。",
stRead:"ばんごはんにさかなをたべました",
stZh:"晚餐吃了魚。"
},

{
id:"food008",level:"N5",
jp:"卵",read:"たまご",romaji:"tamago",zh:"雞蛋",
stJp:"朝ご飯に卵を食べます。",
stRead:"あさごはんにたまごをたべます",
stZh:"早餐吃雞蛋。"
},

{
id:"food009",level:"N5",
jp:"ご飯",read:"ごはん",romaji:"gohan",zh:"飯、餐",
stJp:"家族と晩ご飯を食べます。",
stRead:"かぞくとばんごはんをたべます",
stZh:"和家人一起吃晚餐。"
},

{
id:"food010",level:"N5",
jp:"パン",read:"ぱん",romaji:"pan",zh:"麵包",
stJp:"パンと牛乳を買います。",
stRead:"ぱんとぎゅうにゅうをかいます",
stZh:"買麵包和牛奶。"
},

{
id:"food011",level:"N5",
jp:"野菜",read:"やさい",romaji:"yasai",zh:"蔬菜",
stJp:"毎日野菜を食べます。",
stRead:"まいにちやさいをたべます",
stZh:"每天吃蔬菜。"
},

{
id:"food012",level:"N5",
jp:"果物",read:"くだもの",romaji:"kudamono",zh:"水果",
stJp:"私は果物が好きです。",
stRead:"わたしはくだものがすきです",
stZh:"我喜歡水果。"
},

{
id:"food013",level:"N5",
jp:"牛乳",read:"ぎゅうにゅう",romaji:"gyuunyuu",zh:"牛奶",
stJp:"毎朝牛乳を飲みます。",
stRead:"まいあさぎゅうにゅうをのみます",
stZh:"每天早上喝牛奶。"
},

{
id:"food014",level:"N5",
jp:"コーヒー",read:"こーひー",romaji:"koohii",zh:"咖啡",
stJp:"コーヒーに砂糖を入れます。",
stRead:"こーひーにさとうをいれます",
stZh:"在咖啡裡加糖。"
},

{
id:"food015",level:"N5",
jp:"紅茶",read:"こうちゃ",romaji:"koucha",zh:"紅茶",
stJp:"午後に紅茶を飲みます。",
stRead:"ごごにこうちゃをのみます",
stZh:"下午喝紅茶。"
},

{
id:"food016",level:"N5",
jp:"料理",read:"りょうり",romaji:"ryouri",zh:"料理",
stJp:"母の料理はおいしいです。",
stRead:"ははのりょうりはおいしいです",
stZh:"媽媽做的料理很好吃。"
},

{
id:"food017",level:"N5",
jp:"塩",read:"しお",romaji:"shio",zh:"鹽",
stJp:"スープに塩を入れます。",
stRead:"すーぷにしおをいれます",
stZh:"在湯裡加鹽。"
},

{
id:"food018",level:"N5",
jp:"砂糖",read:"さとう",romaji:"satou",zh:"糖",
stJp:"砂糖は甘いです。",
stRead:"さとうはあまいです",
stZh:"糖是甜的。"
},

{
id:"food019",level:"N5",
jp:"朝ご飯",read:"あさごはん",romaji:"asagohan",zh:"早餐",
stJp:"朝ご飯は七時に食べます。",
stRead:"あさごはんはしちじにたべます",
stZh:"七點吃早餐。"
},

{
id:"food020",level:"N5",
jp:"昼ご飯",read:"ひるごはん",romaji:"hirugohan",zh:"午餐",
stJp:"十二時に昼ご飯を食べます。",
stRead:"じゅうにじにひるごはんをたべます",
stZh:"十二點吃午餐。"
},

{
id:"food021",level:"N5",
jp:"晩ご飯",read:"ばんごはん",romaji:"bangohan",zh:"晚餐",
stJp:"今日の晩ご飯はカレーです。",
stRead:"きょうのばんごはんはかれーです",
stZh:"今天的晚餐是咖哩。"
},

{
id:"food022",level:"N4",
jp:"食事",read:"しょくじ",romaji:"shokuji",zh:"用餐、餐點",
stJp:"食事のあとで薬を飲みます。",
stRead:"しょくじのあとでくすりをのみます",
stZh:"用餐後吃藥。"
},

{
id:"food023",level:"N4",
jp:"注文",read:"ちゅうもん",romaji:"chuumon",zh:"點餐、訂購",
stJp:"レストランで料理を注文しました。",
stRead:"れすとらんでりょうりをちゅうもんしました",
stZh:"在餐廳點了餐。"
},

{
id:"food024",level:"N4",
jp:"味",read:"あじ",romaji:"aji",zh:"味道",
stJp:"このスープは味が薄いです。",
stRead:"このすーぷはあじがうすいです",
stZh:"這碗湯的味道很淡。"
},

{
id:"food025",level:"N4",
jp:"用意",read:"ようい",romaji:"youi",zh:"準備",
stJp:"夕食の用意をしています。",
stRead:"ゆうしょくのよういをしています",
stZh:"正在準備晚餐。"
},

{
id:"food026",level:"N4",
jp:"残す",read:"のこす",romaji:"nokosu",zh:"留下、剩下",
stJp:"食べ物を残さないでください。",
stRead:"たべものをのこさないでください",
stZh:"請不要剩下食物。"
},

{
id:"food027",level:"N4",
jp:"焼く",read:"やく",romaji:"yaku",zh:"烤、燒",
stJp:"魚を焼いて食べます。",
stRead:"さかなをやいてたべます",
stZh:"把魚烤來吃。"
},

{
id:"food028",level:"N4",
jp:"沸かす",read:"わかす",romaji:"wakasu",zh:"燒開",
stJp:"お湯を沸かしてください。",
stRead:"おゆをわかしてください",
stZh:"請把熱水燒開。"
}

]},

{
id:"home",
icon:"🏠",
name:"居家・家具・日用品",
items:[

{
id:"home001",level:"N5",
jp:"家",read:"いえ",romaji:"ie",zh:"家",
stJp:"私の家は駅の近くです。",
stRead:"わたしのいえはえきのちかくです",
stZh:"我家在車站附近。"
},

{
id:"home002",level:"N5",
jp:"部屋",read:"へや",romaji:"heya",zh:"房間",
stJp:"私の部屋はきれいです。",
stRead:"わたしのへやはきれいです",
stZh:"我的房間很乾淨。"
},

{
id:"home003",level:"N5",
jp:"机",read:"つくえ",romaji:"tsukue",zh:"桌子",
stJp:"机の上に本があります。",
stRead:"つくえのうえにほんがあります",
stZh:"桌上有一本書。"
},

{
id:"home004",level:"N5",
jp:"椅子",read:"いす",romaji:"isu",zh:"椅子",
stJp:"椅子に座ってください。",
stRead:"いすにすわってください",
stZh:"請坐在椅子上。"
},

{
id:"home005",level:"N5",
jp:"窓",read:"まど",romaji:"mado",zh:"窗戶",
stJp:"窓を開けてください。",
stRead:"まどをあけてください",
stZh:"請打開窗戶。"
},

{
id:"home006",level:"N5",
jp:"ドア",read:"どあ",romaji:"doa",zh:"門",
stJp:"ドアを閉めてください。",
stRead:"どあをしめてください",
stZh:"請關門。"
},

{
id:"home007",level:"N5",
jp:"傘",read:"かさ",romaji:"kasa",zh:"雨傘",
stJp:"雨ですから、傘を持っていきます。",
stRead:"あめですからかさをもっていきます",
stZh:"因為下雨，所以帶傘出門。"
},

{
id:"home008",level:"N5",
jp:"鞄",read:"かばん",romaji:"kaban",zh:"包包",
stJp:"新しい鞄を買いました。",
stRead:"あたらしいかばんをかいました",
stZh:"買了新的包包。"
},

{
id:"home009",level:"N4",
jp:"引っ越す",read:"ひっこす",romaji:"hikkosu",zh:"搬家",
stJp:"来月、新しい家に引っ越します。",
stRead:"らいげつあたらしいいえにひっこします",
stZh:"下個月要搬到新家。"
},

{
id:"home010",level:"N4",
jp:"片付ける",read:"かたづける",romaji:"katazukeru",zh:"整理、收拾",
stJp:"部屋をきれいに片付けました。",
stRead:"へやをきれいにかたづけました",
stZh:"把房間整理乾淨了。"
},

{
id:"home011",level:"N4",
jp:"壊れる",read:"こわれる",romaji:"kowareru",zh:"壞掉",
stJp:"テレビが壊れました。",
stRead:"てれびがこわれました",
stZh:"電視壞掉了。"
},

{
id:"home012",level:"N4",
jp:"直す",read:"なおす",romaji:"naosu",zh:"修理、改正",
stJp:"父が自転車を直してくれました。",
stRead:"ちちがじてんしゃをなおしてくれました",
stZh:"爸爸幫我修好了腳踏車。"
},

{
id:"home013",level:"N4",
jp:"必要",read:"ひつよう",romaji:"hitsuyou",zh:"必要",
stJp:"旅行にはパスポートが必要です。",
stRead:"りょこうにはぱすぽーとがひつようです",
stZh:"旅行需要護照。"
},

{
id:"home014",level:"N4",
jp:"生活",read:"せいかつ",romaji:"seikatsu",zh:"生活",
stJp:"日本での生活に慣れました。",
stRead:"にほんでのせいかつになれました",
stZh:"已經習慣在日本的生活了。"
}

]},

{
id:"people",
icon:"👨‍👩‍👧",
name:"人物・家庭・人際",
items:[

{
id:"people001",level:"N5",
jp:"私",read:"わたし",romaji:"watashi",zh:"我",
stJp:"私は台湾から来ました。",
stRead:"わたしはたいわんからきました",
stZh:"我來自台灣。"
},

{
id:"people002",level:"N5",
jp:"友達",read:"ともだち",romaji:"tomodachi",zh:"朋友",
stJp:"友達と映画を見ます。",
stRead:"ともだちとえいがをみます",
stZh:"和朋友看電影。"
},

{
id:"people003",level:"N5",
jp:"先生",read:"せんせい",romaji:"sensei",zh:"老師",
stJp:"先生に質問します。",
stRead:"せんせいにしつもんします",
stZh:"向老師提問。"
},

{
id:"people004",level:"N5",
jp:"学生",read:"がくせい",romaji:"gakusei",zh:"學生",
stJp:"私は大学の学生です。",
stRead:"わたしはだいがくのがくせいです",
stZh:"我是大學生。"
},

{
id:"people005",level:"N5",
jp:"父",read:"ちち",romaji:"chichi",zh:"父親（稱自己的父親）",
stJp:"父は会社員です。",
stRead:"ちちはかいしゃいんです",
stZh:"我父親是公司職員。"
},

{
id:"people006",level:"N5",
jp:"母",read:"はは",romaji:"haha",zh:"母親（稱自己的母親）",
stJp:"母は料理が上手です。",
stRead:"はははりょうりがじょうずです",
stZh:"我母親很會做菜。"
},

{
id:"people007",level:"N5",
jp:"兄",read:"あに",romaji:"ani",zh:"哥哥（稱自己的哥哥）",
stJp:"兄は東京に住んでいます。",
stRead:"あにはとうきょうにすんでいます",
stZh:"我哥哥住在東京。"
},

{
id:"people008",level:"N5",
jp:"姉",read:"あね",romaji:"ane",zh:"姐姐（稱自己的姐姐）",
stJp:"姉は病院で働いています。",
stRead:"あねはびょういんではたらいています",
stZh:"我姐姐在醫院工作。"
},

{
id:"people009",level:"N5",
jp:"弟",read:"おとうと",romaji:"otouto",zh:"弟弟",
stJp:"弟はサッカーが好きです。",
stRead:"おとうとはさっかーがすきです",
stZh:"弟弟喜歡足球。"
},

{
id:"people010",level:"N5",
jp:"妹",read:"いもうと",romaji:"imouto",zh:"妹妹",
stJp:"妹は高校生です。",
stRead:"いもうとはこうこうせいです",
stZh:"妹妹是高中生。"
},

{
id:"people011",level:"N5",
jp:"子供",read:"こども",romaji:"kodomo",zh:"小孩",
stJp:"公園で子供が遊んでいます。",
stRead:"こうえんでこどもがあそんでいます",
stZh:"小孩正在公園玩。"
},

{
id:"people012",level:"N5",
jp:"家族",read:"かぞく",romaji:"kazoku",zh:"家人、家庭",
stJp:"私の家族は四人です。",
stRead:"わたしのかぞくはよにんです",
stZh:"我家有四個人。"
},

{
id:"people013",level:"N4",
jp:"夫",read:"おっと",romaji:"otto",zh:"丈夫",
stJp:"夫は毎朝七時に家を出ます。",
stRead:"おっとはまいあさしちじにいえをでます",
stZh:"丈夫每天早上七點出門。"
},

{
id:"people014",level:"N4",
jp:"妻",read:"つま",romaji:"tsuma",zh:"妻子",
stJp:"妻と買い物に行きました。",
stRead:"つまとかいものにいきました",
stZh:"和妻子去買東西了。"
},

{
id:"people015",level:"N4",
jp:"親",read:"おや",romaji:"oya",zh:"父母、家長",
stJp:"週末に親に電話します。",
stRead:"しゅうまつにおやにでんわします",
stZh:"週末打電話給父母。"
},

{
id:"people016",level:"N4",
jp:"関係",read:"かんけい",romaji:"kankei",zh:"關係",
stJp:"二人はとてもいい関係です。",
stRead:"ふたりはとてもいいかんけいです",
stZh:"兩人的關係很好。"
},

{
id:"people017",level:"N4",
jp:"紹介",read:"しょうかい",romaji:"shoukai",zh:"介紹",
stJp:"友達を家族に紹介しました。",
stRead:"ともだちをかぞくにしょうかいしました",
stZh:"把朋友介紹給家人了。"
}

]},

{
id:"time",
icon:"⏰",
name:"時間・日期・頻率",
items:[

{
id:"time001",level:"N5",
jp:"今日",read:"きょう",romaji:"kyou",zh:"今天",
stJp:"今日はいい天気です。",
stRead:"きょうはいいてんきです",
stZh:"今天天氣很好。"
},

{
id:"time002",level:"N5",
jp:"明日",read:"あした",romaji:"ashita",zh:"明天",
stJp:"明日は日曜日です。",
stRead:"あしたはにちようびです",
stZh:"明天是星期日。"
},

{
id:"time003",level:"N5",
jp:"昨日",read:"きのう",romaji:"kinou",zh:"昨天",
stJp:"昨日は雨でした。",
stRead:"きのうはあめでした",
stZh:"昨天是雨天。"
},

{
id:"time004",level:"N5",
jp:"今",read:"いま",romaji:"ima",zh:"現在",
stJp:"今、何時ですか。",
stRead:"いまなんじですか",
stZh:"現在幾點？"
},

{
id:"time005",level:"N5",
jp:"時間",read:"じかん",romaji:"jikan",zh:"時間",
stJp:"今日は時間がありません。",
stRead:"きょうはじかんがありません",
stZh:"今天沒有時間。"
},

{
id:"time006",level:"N5",
jp:"毎日",read:"まいにち",romaji:"mainichi",zh:"每天",
stJp:"毎日日本語を勉強します。",
stRead:"まいにちにほんごをべんきょうします",
stZh:"每天學日文。"
},

{
id:"time007",level:"N5",
jp:"月曜日",read:"げつようび",romaji:"getsuyoubi",zh:"星期一",
stJp:"月曜日から仕事です。",
stRead:"げつようびからしごとです",
stZh:"從星期一開始工作。"
},

{
id:"time008",level:"N5",
jp:"火曜日",read:"かようび",romaji:"kayoubi",zh:"星期二",
stJp:"火曜日に日本語の授業があります。",
stRead:"かようびににほんごのじゅぎょうがあります",
stZh:"星期二有日文課。"
},

{
id:"time009",level:"N5",
jp:"水曜日",read:"すいようび",romaji:"suiyoubi",zh:"星期三",
stJp:"水曜日は図書館へ行きます。",
stRead:"すいようびはとしょかんへいきます",
stZh:"星期三去圖書館。"
},

{
id:"time010",level:"N5",
jp:"今年",read:"ことし",romaji:"kotoshi",zh:"今年",
stJp:"今年は日本へ行きます。",
stRead:"ことしはにほんへいきます",
stZh:"今年要去日本。"
},

{
id:"time011",level:"N4",
jp:"最近",read:"さいきん",romaji:"saikin",zh:"最近",
stJp:"最近、仕事が忙しいです。",
stRead:"さいきんしごとがいそがしいです",
stZh:"最近工作很忙。"
},

{
id:"time012",level:"N4",
jp:"しばらく",read:"しばらく",romaji:"shibaraku",zh:"一會兒、一段時間",
stJp:"ここでしばらく待ってください。",
stRead:"ここでしばらくまってください",
stZh:"請在這裡稍等一會兒。"
},

{
id:"time013",level:"N4",
jp:"途中",read:"とちゅう",romaji:"tochuu",zh:"途中",
stJp:"学校へ行く途中で先生に会いました。",
stRead:"がっこうへいくとちゅうでせんせいにあいました",
stZh:"去學校途中遇到了老師。"
},

{
id:"time014",level:"N4",
jp:"場合",read:"ばあい",romaji:"baai",zh:"場合、情況",
stJp:"雨の場合は中止します。",
stRead:"あめのばあいはちゅうしします",
stZh:"下雨的情況下就取消。"
},

{
id:"time015",level:"N4",
jp:"予定",read:"よてい",romaji:"yotei",zh:"預定、計畫",
stJp:"明日の予定を教えてください。",
stRead:"あしたのよていをおしえてください",
stZh:"請告訴我明天的行程。"
}

]},

{
id:"school",
icon:"🏫",
name:"學校・學習・語言",
items:[

{
id:"school001",level:"N5",
jp:"学校",read:"がっこう",romaji:"gakkou",zh:"學校",
stJp:"毎日学校へ行きます。",
stRead:"まいにちがっこうへいきます",
stZh:"每天去學校。"
},

{
id:"school002",level:"N5",
jp:"本",read:"ほん",romaji:"hon",zh:"書",
stJp:"図書館で本を読みます。",
stRead:"としょかんでほんをよみます",
stZh:"在圖書館看書。"
},

{
id:"school003",level:"N5",
jp:"勉強",read:"べんきょう",romaji:"benkyou",zh:"學習",
stJp:"毎晩日本語を勉強します。",
stRead:"まいばんにほんごをべんきょうします",
stZh:"每天晚上學日文。"
},

{
id:"school004",level:"N5",
jp:"質問",read:"しつもん",romaji:"shitsumon",zh:"問題、提問",
stJp:"先生に質問があります。",
stRead:"せんせいにしつもんがあります",
stZh:"有問題想問老師。"
},

{
id:"school005",level:"N4",
jp:"授業",read:"じゅぎょう",romaji:"jugyou",zh:"課、授課",
stJp:"今日の授業は九時からです。",
stRead:"きょうのじゅぎょうはくじからです",
stZh:"今天的課從九點開始。"
},

{
id:"school006",level:"N4",
jp:"試験",read:"しけん",romaji:"shiken",zh:"考試",
stJp:"来週、日本語の試験があります。",
stRead:"らいしゅうにほんごのしけんがあります",
stZh:"下星期有日文考試。"
},

{
id:"school007",level:"N4",
jp:"復習",read:"ふくしゅう",romaji:"fukushuu",zh:"複習",
stJp:"家に帰って授業を復習します。",
stRead:"いえにかえってじゅぎょうをふくしゅうします",
stZh:"回家後複習上課內容。"
},

{
id:"school008",level:"N4",
jp:"予習",read:"よしゅう",romaji:"yoshuu",zh:"預習",
stJp:"明日の授業を予習しました。",
stRead:"あしたのじゅぎょうをよしゅうしました",
stZh:"預習了明天的課。"
},

{
id:"school009",level:"N4",
jp:"説明",read:"せつめい",romaji:"setsumei",zh:"說明",
stJp:"先生が文法を説明しました。",
stRead:"せんせいがぶんぽうをせつめいしました",
stZh:"老師說明了文法。"
},

{
id:"school010",level:"N4",
jp:"意味",read:"いみ",romaji:"imi",zh:"意思、意義",
stJp:"この言葉の意味を教えてください。",
stRead:"このことばのいみをおしえてください",
stZh:"請告訴我這個詞的意思。"
},

{
id:"school011",level:"N4",
jp:"間違える",read:"まちがえる",romaji:"machigaeru",zh:"弄錯、答錯",
stJp:"漢字を一つ間違えました。",
stRead:"かんじをひとつまちがえました",
stZh:"寫錯了一個漢字。"
},

{
id:"school012",level:"N4",
jp:"覚える",read:"おぼえる",romaji:"oboeru",zh:"記住",
stJp:"毎日十個の単語を覚えます。",
stRead:"まいにちじゅっこのたんごをおぼえます",
stZh:"每天記十個單字。"
},

{
id:"school013",level:"N4",
jp:"忘れる",read:"わすれる",romaji:"wasureru",zh:"忘記",
stJp:"宿題を忘れないでください。",
stRead:"しゅくだいをわすれないでください",
stZh:"請不要忘記作業。"
}

]},

{
id:"place",
icon:"🗾",
name:"場所・旅行・交通",
items:[

{
id:"place001",level:"N5",
jp:"駅",read:"えき",romaji:"eki",zh:"車站",
stJp:"駅で友達を待ちます。",
stRead:"えきでともだちをまちます",
stZh:"在車站等朋友。"
},

{
id:"place002",level:"N5",
jp:"車",read:"くるま",romaji:"kuruma",zh:"汽車",
stJp:"父は車で会社へ行きます。",
stRead:"ちちはくるまでかいしゃへいきます",
stZh:"爸爸開車去公司。"
},

{
id:"place003",level:"N5",
jp:"店",read:"みせ",romaji:"mise",zh:"店",
stJp:"この店は安いです。",
stRead:"このみせはやすいです",
stZh:"這家店很便宜。"
},

{
id:"place004",level:"N5",
jp:"病院",read:"びょういん",romaji:"byouin",zh:"醫院",
stJp:"風邪をひいて病院へ行きました。",
stRead:"かぜをひいてびょういんへいきました",
stZh:"感冒了，所以去了醫院。"
},

{
id:"place005",level:"N5",
jp:"銀行",read:"ぎんこう",romaji:"ginkou",zh:"銀行",
stJp:"銀行でお金を下ろします。",
stRead:"ぎんこうでおかねをおろします",
stZh:"在銀行領錢。"
},

{
id:"place006",level:"N5",
jp:"図書館",read:"としょかん",romaji:"toshokan",zh:"圖書館",
stJp:"図書館で勉強します。",
stRead:"としょかんでべんきょうします",
stZh:"在圖書館讀書。"
},

{
id:"place007",level:"N5",
jp:"郵便局",read:"ゆうびんきょく",romaji:"yuubinkyoku",zh:"郵局",
stJp:"郵便局で手紙を出します。",
stRead:"ゆうびんきょくでてがみをだします",
stZh:"在郵局寄信。"
},

{
id:"place008",level:"N5",
jp:"公園",read:"こうえん",romaji:"kouen",zh:"公園",
stJp:"公園を散歩します。",
stRead:"こうえんをさんぽします",
stZh:"在公園散步。"
},

{
id:"place009",level:"N4",
jp:"空港",read:"くうこう",romaji:"kuukou",zh:"機場",
stJp:"朝八時に空港に着きました。",
stRead:"あさはちじにくうこうにつきました",
stZh:"早上八點抵達機場。"
},

{
id:"place010",level:"N4",
jp:"旅館",read:"りょかん",romaji:"ryokan",zh:"日式旅館",
stJp:"京都の旅館に泊まりました。",
stRead:"きょうとのりょかんにとまりました",
stZh:"住在京都的日式旅館。"
},

{
id:"place011",level:"N4",
jp:"予約",read:"よやく",romaji:"yoyaku",zh:"預約",
stJp:"ホテルを予約しました。",
stRead:"ほてるをよやくしました",
stZh:"預約了飯店。"
},

{
id:"place012",level:"N4",
jp:"到着",read:"とうちゃく",romaji:"touchaku",zh:"抵達",
stJp:"電車は三時に駅に到着します。",
stRead:"でんしゃはさんじにえきにとうちゃくします",
stZh:"電車三點抵達車站。"
},

{
id:"place013",level:"N4",
jp:"出発",read:"しゅっぱつ",romaji:"shuppatsu",zh:"出發",
stJp:"バスは七時に出発します。",
stRead:"ばすはしちじにしゅっぱつします",
stZh:"公車七點出發。"
},

{
id:"place014",level:"N4",
jp:"乗り換える",read:"のりかえる",romaji:"norikaeru",zh:"轉乘",
stJp:"次の駅で地下鉄に乗り換えます。",
stRead:"つぎのえきでちかてつにのりかえます",
stZh:"在下一站轉乘地下鐵。"
},

{
id:"place015",level:"N4",
jp:"案内",read:"あんない",romaji:"annai",zh:"引導、導覽",
stJp:"駅員が出口を案内してくれました。",
stRead:"えきいんがでぐちをあんないしてくれました",
stZh:"站務員告訴我出口的位置。"
},

{
id:"place016",level:"N4",
jp:"景色",read:"けしき",romaji:"keshiki",zh:"景色",
stJp:"山から見える景色はきれいです。",
stRead:"やまからみえるけしきはきれいです",
stZh:"從山上看到的景色很漂亮。"
},

{
id:"place017",level:"N4",
jp:"旅行",read:"りょこう",romaji:"ryokou",zh:"旅行",
stJp:"夏休みに北海道へ旅行します。",
stRead:"なつやすみにほっかいどうへりょこうします",
stZh:"暑假要去北海道旅行。"
}

]},

{
id:"work",
icon:"💼",
name:"工作・公司・社會",
items:[

{
id:"work001",level:"N5",
jp:"仕事",read:"しごと",romaji:"shigoto",zh:"工作",
stJp:"父は毎日仕事をします。",
stRead:"ちちはまいにちしごとをします",
stZh:"爸爸每天工作。"
},

{
id:"work002",level:"N5",
jp:"会社",read:"かいしゃ",romaji:"kaisha",zh:"公司",
stJp:"兄は東京の会社で働いています。",
stRead:"あにはとうきょうのかいしゃではたらいています",
stZh:"哥哥在東京的公司工作。"
},

{
id:"work003",level:"N4",
jp:"会議",read:"かいぎ",romaji:"kaigi",zh:"會議",
stJp:"午後三時から会議があります。",
stRead:"ごごさんじからかいぎがあります",
stZh:"下午三點開始有會議。"
},

{
id:"work004",level:"N4",
jp:"連絡",read:"れんらく",romaji:"renraku",zh:"聯絡",
stJp:"着いたら私に連絡してください。",
stRead:"ついたらわたしにれんらくしてください",
stZh:"到了之後請聯絡我。"
},

{
id:"work005",level:"N4",
jp:"相談",read:"そうだん",romaji:"soudan",zh:"商量、諮詢",
stJp:"先生に進路を相談しました。",
stRead:"せんせいにしんろをそうだんしました",
stZh:"和老師商量了升學方向。"
},

{
id:"work006",level:"N4",
jp:"受付",read:"うけつけ",romaji:"uketsuke",zh:"櫃檯、受理處",
stJp:"受付で名前を書いてください。",
stRead:"うけつけでなまえをかいてください",
stZh:"請在櫃檯寫下姓名。"
},

{
id:"work007",level:"N4",
jp:"経験",read:"けいけん",romaji:"keiken",zh:"經驗",
stJp:"日本で働いた経験があります。",
stRead:"にほんではたらいたけいけんがあります",
stZh:"有在日本工作的經驗。"
},

{
id:"work008",level:"N4",
jp:"決める",read:"きめる",romaji:"kimeru",zh:"決定",
stJp:"旅行の日を決めました。",
stRead:"りょこうのひをきめました",
stZh:"決定了旅行日期。"
},

{
id:"work009",level:"N4",
jp:"続ける",read:"つづける",romaji:"tsuzukeru",zh:"繼續",
stJp:"これからも日本語の勉強を続けます。",
stRead:"これからもにほんごのべんきょうをつづけます",
stZh:"今後也會繼續學日文。"
}

]},

{
id:"health",
icon:"🏥",
name:"身體・健康・醫療",
items:[

{
id:"health001",level:"N5",
jp:"体",read:"からだ",romaji:"karada",zh:"身體",
stJp:"毎日運動すると体にいいです。",
stRead:"まいにちうんどうするとからだにいいです",
stZh:"每天運動對身體很好。"
},

{
id:"health002",level:"N5",
jp:"頭",read:"あたま",romaji:"atama",zh:"頭",
stJp:"今日は頭が痛いです。",
stRead:"きょうはあたまがいたいです",
stZh:"今天頭痛。"
},

{
id:"health003",level:"N4",
jp:"薬",read:"くすり",romaji:"kusuri",zh:"藥",
stJp:"食事のあとで薬を飲んでください。",
stRead:"しょくじのあとでくすりをのんでください",
stZh:"請在飯後吃藥。"
},

{
id:"health004",level:"N4",
jp:"熱",read:"ねつ",romaji:"netsu",zh:"發燒、體溫",
stJp:"昨日から熱があります。",
stRead:"きのうからねつがあります",
stZh:"從昨天開始發燒。"
},

{
id:"health005",level:"N4",
jp:"治る",read:"なおる",romaji:"naoru",zh:"痊癒",
stJp:"風邪はもう治りました。",
stRead:"かぜはもうなおりました",
stZh:"感冒已經好了。"
},

{
id:"health006",level:"N4",
jp:"気分",read:"きぶん",romaji:"kibun",zh:"心情、身體感覺",
stJp:"今日は少し気分が悪いです。",
stRead:"きょうはすこしきぶんがわるいです",
stZh:"今天身體有點不舒服。"
},

{
id:"health007",level:"N4",
jp:"心配",read:"しんぱい",romaji:"shinpai",zh:"擔心",
stJp:"そんなに心配しないでください。",
stRead:"そんなにしんぱいしないでください",
stZh:"請不要那麼擔心。"
}

]},

{
id:"verb",
icon:"🚀",
name:"核心動詞",
items:[

{
id:"verb001",level:"N5",
jp:"行く",read:"いく",romaji:"iku",zh:"去",
stJp:"明日東京へ行きます。",
stRead:"あしたとうきょうへいきます",
stZh:"明天去東京。"
},

{
id:"verb002",level:"N5",
jp:"来る",read:"くる",romaji:"kuru",zh:"來",
stJp:"友達が家に来ました。",
stRead:"ともだちがいえにきました",
stZh:"朋友來家裡了。"
},

{
id:"verb003",level:"N5",
jp:"帰る",read:"かえる",romaji:"kaeru",zh:"回去、回家",
stJp:"六時に家へ帰ります。",
stRead:"ろくじにいえへかえります",
stZh:"六點回家。"
},

{
id:"verb004",level:"N5",
jp:"食べる",read:"たべる",romaji:"taberu",zh:"吃",
stJp:"昼ご飯を食べます。",
stRead:"ひるごはんをたべます",
stZh:"吃午餐。"
},

{
id:"verb005",level:"N5",
jp:"飲む",read:"のむ",romaji:"nomu",zh:"喝",
stJp:"水を一杯飲みます。",
stRead:"みずをいっぱいのみます",
stZh:"喝一杯水。"
},

{
id:"verb006",level:"N5",
jp:"見る",read:"みる",romaji:"miru",zh:"看",
stJp:"家でテレビを見ます。",
stRead:"いえでてれびをみます",
stZh:"在家看電視。"
},

{
id:"verb007",level:"N5",
jp:"聞く",read:"きく",romaji:"kiku",zh:"聽、詢問",
stJp:"毎朝音楽を聞きます。",
stRead:"まいあさおんがくをききます",
stZh:"每天早上聽音樂。"
},

{
id:"verb008",level:"N5",
jp:"読む",read:"よむ",romaji:"yomu",zh:"讀",
stJp:"電車の中で本を読みます。",
stRead:"でんしゃのなかでほんをよみます",
stZh:"在電車裡看書。"
},

{
id:"verb009",level:"N5",
jp:"書く",read:"かく",romaji:"kaku",zh:"寫",
stJp:"ノートに名前を書きます。",
stRead:"のーとになまえをかきます",
stZh:"在筆記本上寫名字。"
},

{
id:"verb010",level:"N5",
jp:"買う",read:"かう",romaji:"kau",zh:"買",
stJp:"スーパーで野菜を買います。",
stRead:"すーぱーでやさいをかいます",
stZh:"在超市買蔬菜。"
},

{
id:"verb011",level:"N4",
jp:"調べる",read:"しらべる",romaji:"shiraberu",zh:"調查、查詢",
stJp:"分からない言葉を辞書で調べます。",
stRead:"わからないことばをじしょでしらべます",
stZh:"用字典查不懂的單字。"
},

{
id:"verb012",level:"N4",
jp:"選ぶ",read:"えらぶ",romaji:"erabu",zh:"選擇",
stJp:"好きな色を選んでください。",
stRead:"すきないろをえらんでください",
stZh:"請選擇喜歡的顏色。"
},

{
id:"verb013",level:"N4",
jp:"伝える",read:"つたえる",romaji:"tsutaeru",zh:"傳達",
stJp:"先生にこのことを伝えてください。",
stRead:"せんせいにこのことをつたえてください",
stZh:"請把這件事告訴老師。"
},

{
id:"verb014",level:"N4",
jp:"間に合う",read:"まにあう",romaji:"maniau",zh:"趕得上",
stJp:"急げば電車に間に合います。",
stRead:"いそげばでんしゃにまにあいます",
stZh:"如果快一點就趕得上電車。"
},

{
id:"verb015",level:"N4",
jp:"間違う",read:"まちがう",romaji:"machigau",zh:"弄錯",
stJp:"電車を間違ってしまいました。",
stRead:"でんしゃをまちがってしまいました",
stZh:"搭錯電車了。"
},

{
id:"verb016",level:"N4",
jp:"増える",read:"ふえる",romaji:"fueru",zh:"增加",
stJp:"最近、外国人の観光客が増えました。",
stRead:"さいきんがいこくじんのかんこうきゃくがふえました",
stZh:"最近外國觀光客增加了。"
},

{
id:"verb017",level:"N4",
jp:"減る",read:"へる",romaji:"heru",zh:"減少",
stJp:"冬になると観光客が減ります。",
stRead:"ふゆになるとかんこうきゃくがへります",
stZh:"到了冬天觀光客會減少。"
},

{
id:"verb018",level:"N4",
jp:"比べる",read:"くらべる",romaji:"kuraberu",zh:"比較",
stJp:"二つの商品を比べてみます。",
stRead:"ふたつのしょうひんをくらべてみます",
stZh:"比較看看兩項商品。"
},

{
id:"verb019",level:"N4",
jp:"慣れる",read:"なれる",romaji:"nareru",zh:"習慣",
stJp:"日本の生活に慣れてきました。",
stRead:"にほんのせいかつになれてきました",
stZh:"漸漸習慣日本的生活了。"
},

{
id:"verb020",level:"N4",
jp:"届く",read:"とどく",romaji:"todoku",zh:"送達、到達",
stJp:"昨日、荷物が届きました。",
stRead:"きのうにもつがとどきました",
stZh:"昨天包裹送到了。"
}

]},

{
id:"adj",
icon:"✨",
name:"形容詞・狀態",
items:[

{
id:"adj001",level:"N5",
jp:"大きい",read:"おおきい",romaji:"ookii",zh:"大的",
stJp:"これは大きい箱です。",
stRead:"これはおおきいはこです",
stZh:"這是一個大箱子。"
},

{
id:"adj002",level:"N5",
jp:"小さい",read:"ちいさい",romaji:"chiisai",zh:"小的",
stJp:"小さい犬がいます。",
stRead:"ちいさいいぬがいます",
stZh:"有一隻小狗。"
},

{
id:"adj003",level:"N5",
jp:"おいしい",read:"おいしい",romaji:"oishii",zh:"好吃的",
stJp:"この寿司はおいしいです。",
stRead:"このすしはおいしいです",
stZh:"這個壽司很好吃。"
},

{
id:"adj004",level:"N5",
jp:"高い",read:"たかい",romaji:"takai",zh:"高的、昂貴的",
stJp:"この時計は高いです。",
stRead:"このとけいはたかいです",
stZh:"這支手錶很貴。"
},

{
id:"adj005",level:"N5",
jp:"安い",read:"やすい",romaji:"yasui",zh:"便宜的",
stJp:"この服は安いです。",
stRead:"このふくはやすいです",
stZh:"這件衣服很便宜。"
},

{
id:"adj006",level:"N5",
jp:"新しい",read:"あたらしい",romaji:"atarashii",zh:"新的",
stJp:"新しい靴を買いました。",
stRead:"あたらしいくつをかいました",
stZh:"買了新鞋。"
},

{
id:"adj007",level:"N5",
jp:"古い",read:"ふるい",romaji:"furui",zh:"舊的、古老的",
stJp:"これは古いお寺です。",
stRead:"これはふるいおてらです",
stZh:"這是一座古老的寺廟。"
},

{
id:"adj008",level:"N5",
jp:"暑い",read:"あつい",romaji:"atsui",zh:"炎熱的",
stJp:"今日はとても暑いです。",
stRead:"きょうはとてもあついです",
stZh:"今天非常熱。"
},

{
id:"adj009",level:"N5",
jp:"寒い",read:"さむい",romaji:"samui",zh:"寒冷的",
stJp:"北海道の冬は寒いです。",
stRead:"ほっかいどうのふゆはさむいです",
stZh:"北海道的冬天很冷。"
},

{
id:"adj010",level:"N5",
jp:"きれい",read:"きれい",romaji:"kirei",zh:"漂亮、乾淨",
stJp:"この公園はとてもきれいです。",
stRead:"このこうえんはとてもきれいです",
stZh:"這座公園非常漂亮。"
},

{
id:"adj011",level:"N4",
jp:"眠い",read:"ねむい",romaji:"nemui",zh:"想睡的",
stJp:"昨日あまり寝なかったので眠いです。",
stRead:"きのうあまりねなかったのでねむいです",
stZh:"昨天沒怎麼睡，所以很睏。"
},

{
id:"adj012",level:"N4",
jp:"恥ずかしい",read:"はずかしい",romaji:"hazukashii",zh:"害羞、難為情",
stJp:"みんなの前で話すのは恥ずかしいです。",
stRead:"みんなのまえではなすのははずかしいです",
stZh:"在大家面前說話很難為情。"
},

{
id:"adj013",level:"N4",
jp:"珍しい",read:"めずらしい",romaji:"mezurashii",zh:"稀有、少見",
stJp:"これは珍しい花です。",
stRead:"これはめずらしいはなです",
stZh:"這是很少見的花。"
},

{
id:"adj014",level:"N4",
jp:"十分",read:"じゅうぶん",romaji:"juubun",zh:"充分、足夠",
stJp:"時間は十分あります。",
stRead:"じかんはじゅうぶんあります",
stZh:"時間很充足。"
},

{
id:"adj015",level:"N4",
jp:"残念",read:"ざんねん",romaji:"zannen",zh:"可惜、遺憾",
stJp:"試合に負けて残念でした。",
stRead:"しあいにまけてざんねんでした",
stZh:"比賽輸了，很可惜。"
},

{
id:"adj016",level:"N4",
jp:"自由",read:"じゆう",romaji:"jiyuu",zh:"自由",
stJp:"午後は自由な時間があります。",
stRead:"ごごはじゆうなじかんがあります",
stZh:"下午有自由時間。"
},

{
id:"adj017",level:"N4",
jp:"特別",read:"とくべつ",romaji:"tokubetsu",zh:"特別",
stJp:"今日は私にとって特別な日です。",
stRead:"きょうはわたしにとってとくべつなひです",
stZh:"今天對我來說是特別的一天。"
}

]},

{
id:"abstract",
icon:"💬",
name:"N4 常用抽象詞・副詞",
items:[

{
id:"abstract001",level:"N4",
jp:"理由",read:"りゆう",romaji:"riyuu",zh:"理由",
stJp:"遅れた理由を説明してください。",
stRead:"おくれたりゆうをせつめいしてください",
stZh:"請說明遲到的理由。"
},

{
id:"abstract002",level:"N4",
jp:"方法",read:"ほうほう",romaji:"houhou",zh:"方法",
stJp:"いい勉強方法を教えてください。",
stRead:"いいべんきょうほうほうをおしえてください",
stZh:"請告訴我好的學習方法。"
},

{
id:"abstract003",level:"N4",
jp:"意見",read:"いけん",romaji:"iken",zh:"意見",
stJp:"あなたの意見を聞かせてください。",
stRead:"あなたのいけんをきかせてください",
stZh:"請讓我聽聽你的意見。"
},

{
id:"abstract004",level:"N4",
jp:"機会",read:"きかい",romaji:"kikai",zh:"機會",
stJp:"日本人と話す機会が増えました。",
stRead:"にほんじんとはなすきかいがふえました",
stZh:"和日本人說話的機會增加了。"
},

{
id:"abstract005",level:"N4",
jp:"習慣",read:"しゅうかん",romaji:"shuukan",zh:"習慣",
stJp:"毎朝散歩する習慣があります。",
stRead:"まいあささんぽするしゅうかんがあります",
stZh:"有每天早上散步的習慣。"
},

{
id:"abstract006",level:"N4",
jp:"約束",read:"やくそく",romaji:"yakusoku",zh:"約定",
stJp:"友達と会う約束をしました。",
stRead:"ともだちとあうやくそくをしました",
stZh:"和朋友約好要見面。"
},

{
id:"abstract007",level:"N4",
jp:"準備",read:"じゅんび",romaji:"junbi",zh:"準備",
stJp:"旅行の準備をしています。",
stRead:"りょこうのじゅんびをしています",
stZh:"正在準備旅行。"
},

{
id:"abstract008",level:"N4",
jp:"ほとんど",read:"ほとんど",romaji:"hotondo",zh:"幾乎、大部分",
stJp:"宿題はほとんど終わりました。",
stRead:"しゅくだいはほとんどおわりました",
stZh:"作業幾乎做完了。"
},

{
id:"abstract009",level:"N4",
jp:"必ず",read:"かならず",romaji:"kanarazu",zh:"一定、必定",
stJp:"明日は必ず来てください。",
stRead:"あしたはかならずきてください",
stZh:"明天請一定要來。"
},

{
id:"abstract010",level:"N4",
jp:"特に",read:"とくに",romaji:"tokuni",zh:"特別、尤其",
stJp:"私は果物が好きで、特にいちごが好きです。",
stRead:"わたしはくだものがすきでとくにいちごがすきです",
stZh:"我喜歡水果，尤其喜歡草莓。"
},

{
id:"abstract011",level:"N4",
jp:"例えば",read:"たとえば",romaji:"tatoeba",zh:"例如",
stJp:"日本料理、例えば寿司が好きです。",
stRead:"にほんりょうりたとえばすしがすきです",
stZh:"我喜歡日本料理，例如壽司。"
},

{
id:"abstract012",level:"N4",
jp:"たぶん",read:"たぶん",romaji:"tabun",zh:"大概、可能",
stJp:"明日はたぶん雨でしょう。",
stRead:"あしたはたぶんあめでしょう",
stZh:"明天大概會下雨吧。"
},

{
id:"abstract013",level:"N4",
jp:"やっと",read:"やっと",romaji:"yatto",zh:"終於",
stJp:"やっと宿題が終わりました。",
stRead:"やっとしゅくだいがおわりました",
stZh:"作業終於寫完了。"
},

{
id:"abstract014",level:"N4",
jp:"ずいぶん",read:"ずいぶん",romaji:"zuibun",zh:"相當、非常",
stJp:"今日はずいぶん寒いですね。",
stRead:"きょうはずいぶんさむいですね",
stZh:"今天相當冷呢。"
},

{
id:"abstract015",level:"N4",
jp:"もし",read:"もし",romaji:"moshi",zh:"如果",
stJp:"もし時間があれば、一緒に行きましょう。",
stRead:"もしじかんがあればいっしょにいきましょう",
stZh:"如果有時間的話，一起去吧。"
}

]}

];
