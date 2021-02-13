export type WineType = 'red' | 'white';

export type Items = {
  [key: string]: boolean;
};

export type CategoryItems = {
  [key: string]: Items;
};

type SubCategories = {
  外観: string[];
  香り: string[];
  味わい: string[];
  総合評価: string[];
};

export const SUB_CATEGORIES: SubCategories = {
  外観: ['清澄度', '輝き', '色調', '濃淡', '粘性', '外観の印象'],
  香り: ['第一印象', '果実_花_植物', '香辛料_芳香_化学物質', '香りの印象'],
  味わい: [
    'アタック',
    '甘み',
    '酸味',
    'タンニン分',
    'バランス',
    'アルコール',
    '余韻',
  ],
  総合評価: [
    '評価',
    '適正温度',
    'グラス',
    'デカンタージュ',
    '収穫年',
    '生産地',
    '主なぶどう品種',
  ],
};

export const APPEARANCE_DEFAULT: CategoryItems = {
  清澄度: {
    澄んだ: false,
    深みのある: false,
    やや濁った: false,
    濁った: false,
  },
  輝き: {
    輝きのある: false,
    落ち着いた: false,
    モヤがかかった: false,
  },
  色調: {
    紫がかった: false,
    ルビー: false,
    黒味を帯びた: false,
    オレンジがかった: false,
    ガーネット: false,
    レンガ色: false,
    マホガニー: false,
  },
  濃淡: {
    薄い: false,
    やや明るい: false,
    明るい: false,
    やや濃い: false,
    濃い: false,
    非常に濃い: false,
  },
  粘性: {
    さらっとした: false,
    やや軽い: false,
    やや強い: false,
    強い: false,
  },
  外観の印象: {
    若い: false,
    若い状態を抜けた: false,
    軽い: false,
    熟した: false,
    成熟度が高い: false,
    濃縮感が強い: false,
    やや熟成した: false,
    熟成した: false,
    酸化熟成のニュアンス: false,
    酸化が進んだ: false,
    完全に酸化している: false,
  },
};

export const NOSE_DEFAULT: CategoryItems = {
  第一印象: {
    閉じている: false,
    控えめ: false,
    しっかりと感じられる: false,
    力強い: false,
    チャーミングな: false,
    華やかな: false,
    濃縮感がある: false,
    深みのある: false,
    複雑な: false,
  },
  果実_花_植物: {
    イチゴ: false,
    ラズベリー: false,
    ブルーベリー: false,
    カシス: false,
    ブラックベリー: false,
    ブラックチェリー: false,
    干しプラム: false,
    乾燥イチジク: false,
    赤ピーマン: false,
    メントール: false,
    シダ: false,
    バラ: false,
    すみれ: false,
    牡丹: false,
    ゼラニウム: false,
    ローリエ: false,
    杉: false,
    針葉樹: false,
    ドライハーブ: false,
    タバコ: false,
    紅茶: false,
    キノコ: false,
    スーボア: false,
    トリュフ: false,
    腐葉土: false,
    土: false,
  },
  香辛料_芳香_化学物質: {
    血液: false,
    肉: false,
    なめし皮: false,
    燻製: false,
    シヴェ: false,
    ジビエ: false,
    コーヒー: false,
    カカオパウダー: false,
    ヴァニラ: false,
    黒胡椒: false,
    丁子: false,
    シナモン: false,
    ナツメグ: false,
    甘草: false,
    白檀: false,
    杜松の実: false,
    硫黄: false,
    樹脂: false,
    ヨード: false,
    ランシオ: false,
  },
  香りの印象: {
    若々しい: false,
    還元的: false,
    熟成感が現れている: false,
    酸化熟成の段階にある: false,
    酸化している: false,
    第1アロマが強い: false,
    第2アロマが強い: false,
    ニュートラル: false,
    木樽からのニュアンス: false,
  },
};

export const PALATE_DEFAULT: CategoryItems = {
  アタック: {
    軽い: false,
    やや軽い: false,
    やや強い: false,
    強い: false,
    インパクトのある: false,
  },
  甘み: {
    軽い: false,
    まろやか: false,
    豊かな: false,
    残糖がある: false,
  },
  酸味: {
    シャープな: false,
    爽やかな: false,
    なめらかな: false,
    円みのある: false,
    キメ細かい: false,
    やさしい: false,
    力強い: false,
  },
  タンニン分: {
    収斂性のある: false,
    力強い: false,
    緻密: false,
    サラサラとした: false,
    ヴィロードのような: false,
    シルキーな: false,
    溶け込んだ: false,
  },
  バランス: {
    スマートな: false,
    骨格のしっかりとした: false,
    固い: false,
    痩せた_渇いた: false,
    豊満な: false,
    肉厚な: false,
    力強い: false,
    流れるような: false,
    バランスの良い: false,
  },
  アルコール: {
    控えめ: false,
    やや軽め: false,
    中程度: false,
    やや強め: false,
    熱さを感じる: false,
  },
  余韻: {
    短い: false,
    やや短い: false,
    やや長い: false,
    長い: false,
  },
};

export const CONCLUSION_DEFAULT: CategoryItems = {
  評価: {
    シンプル_フレッシュ感を楽しむ: false,
    成熟度が高く_豊か: false,
    濃縮し_力強い: false,
    エレガントで_余韻の長い: false,
    長期熟成型: false,
  },
  適正温度: {
    '10度未満': false,
    '10-13度': false,
    '14-16度': false,
    '17-20度': false,
    '21度以上': false,
  },
  グラス: {
    小ぶり: false,
    中庸: false,
    大ぶり: false,
  },
  デカンタージュ: {
    必要なし: false,
    '事前(30分前)': false,
    '事前(60分前)': false,
    '事前(1時間前)': false,
  },
  収穫年: {
    '2010以前': false,
    '2010-2014': false,
    '2015-2018': false,
    '2019,2020': false,
  },
  生産地: {
    フランス: false,
    アメリカ: false,
    オーストラリア: false,
    スペイン: false,
    イタリア: false,
    日本: false,
    アルゼンチン: false,
  },
  主なぶどう品種: {
    Gamay: false,
    Zinfandel: false,
    'Syrah(Shiraz)': false,
    Malbec: false,
    Nebbiolo: false,
    'Muscat Balley A': false,
    Tempranillo: false,
  },
};
