/**
 * 测试nlpir api
 */

let nlpir = require('../lib/nlpir.js');
let path = require('path');
let fs = require('fs');

let title = '中柬军事合作'
let text = '国防部新闻局今日就中柬军事合作答记者问时表示，柬埔寨王国副首相兼国防大臣迪班访华期间，中方决定向柬军提供一批医疗器材和办公用品等物资，主要是为了支持柬国防和军队建设，深化两军务实合作。有记者提及，据报道，柬埔寨副首相兼国防大臣迪班17日对记者表示，柬中两国就中方向柬军事现代化提供援助签署了协议。请证实并介绍有关情况。国防部新闻局回应，中柬两军关系是两国关系的重要组成部分，长期以来保持着良好发展势头。10月10日至15日，柬埔寨王国副首相兼国防大臣迪班出席第七届香山论坛并正式访华。访问期间，中方决定向柬军提供一批医疗器材和办公用品等物资，主要是为了支持柬国防和军队建设，深化两军务实合作。2016年10月18日，外交部长王毅在北京对记者表示，中国与菲律宾隔海相望，两国人民之间有着长久友好交往。前两年，两国关系的倒退损害了 菲律宾人民的利益，也影响了地区形势稳定。杜特尔特总统就任后，做出了与中国重建友好的选择，愿意回到对话合作的轨道，体现了菲律宾人民的愿望，符合菲律宾国家民族利益，顺应历史发展潮流，任何人、任何势力都不可能阻挡。王毅表示，今天，杜特尔特总统即将跨海而来。这是一次历史性访问，将成为中菲关系的新起点。我要告诉大家的是，中方也高度重视这次访问，我们已经做好准备，愿向菲律宾人民展开友谊之臂，伸出合作之手。相信杜特尔特总统的访问一定会取得成功，不仅使中菲关系重回正轨，也会为两国各领域互利合作开辟新的前景。';

/**
 * 测试ictclas
 */
let {
  ictclas
} = nlpir;

// ictclas.init();

// ictclas.importUserDict(path.join(__dirname, '../assets/userDict.txt'), false);

// ictclas.addUserWord('探究下 user');

// ictclas.setTagSet(0);

// console.log(ictclas.paragraphProcess(text));

// let source = './asssets/source.txt';
// let result = './assets/result.txt';
// ictclas.fileProcess(source, result, 1);

// console.log(ictclas.getParagraphProcessAWordCount(text));

// console.log(ictclas.getWordFreqStat(text));

// console.log(ictclas.getFileWordFreqStat(source));

// console.log(ictclas.getLastErrorMsg());

// ictclas.exit();

/**
 * 测试sentiment
 */
// let xml2json = require('xml2json');

let {sentiment} = nlpir;
sentiment.init();
// console.log(sentiment.getSentimentPoint(text));
console.log(sentiment.getSentencePoint(text));
// let xml = sentiment.getSentencePoint(text);
// let json = xml2json.toJson(xml);
// console.log(json);
// console.log(sentiment.getOneObjectResult('', text, '考研时'));
// console.log(sentiment.getOneObjectResult(title, text, '军事'));
// console.log(sentiment.getMultiObjectResult(title, text, '../assets/rule.xml'));
sentiment.exit();