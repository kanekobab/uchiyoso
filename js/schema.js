/**
 * js/schema.js — 単一の真実の源 (Single Source of Truth)
 *
 * index.html / editor.html / view.html が共有するすべての定数・スキーマ定義。
 * DOM依存・Firebase依存なし。フィールド1つ追加 = このファイルのみ修正。
 */

// ── ペア種別 ────────────────────────────────────────────────────────────────
export const PAIR_GENDER_OPTS = [
  ["hetero", "異性同士"],
  ["male", "男同士"],
  ["female", "女同士"],
];
export const PAIR_GENDER_MAP = Object.fromEntries(PAIR_GENDER_OPTS);

// ── リバ ────────────────────────────────────────────────────────────────────
export const RIBA_PREF_OPTS = [
  ["fixed", "完全固定"],
  ["cond_riba", "条件付きリバ可"],
  ["full_riba", "完全リバ可"],
];
export const RIBA_PREF_MAP = Object.fromEntries(RIBA_PREF_OPTS);

// ── ポジション ──────────────────────────────────────────────────────────────
export const POS_OPTS = [
  ["top", "攻め希望"],
  ["bottom", "受け希望"],
  ["either_riba", "どちらでも（リバ）"],
  ["sub_top", "従属的な攻め"],
  ["mental_bottom", "精神優位の受け"],
  ["discuss", "要相談"],
];
export const POS_MAP = {
  ...Object.fromEntries(POS_OPTS),
  either: "どちらでも", // 後方互換（旧データ）
};

// ── R18 表現の可否 ──────────────────────────────────────────────────────────
export const R18_PREF_OPTS = [
  ["love", "好き"],
  ["ok", "普通"],
  ["ng", "NG"],
  ["conditional", "条件付きなら可能"],
];
export const R18_MAP = {
  ...Object.fromEntries(R18_PREF_OPTS),
  dislike: "苦手",
  self: "自PCがなるなら好き",
  partner: "相手PCがなるなら好き",
};

// ── R18 ポジション ──────────────────────────────────────────────────────────
export const R18_POSITION_OPTS = [
  ["offender", "自PC加害 / 攻め"],
  ["victim", "自PC被害 / 受け"],
  ["either", "どちらでも"],
  ["third_party", "第三者のみ"],
];
export const R18_POSITION_MAP = Object.fromEntries(R18_POSITION_OPTS);

// ── RP方針 ──────────────────────────────────────────────────────────────────
export const RP_POLICY_OPTS = [
  ["rp", "RPをする"],
  ["narrate", "描写を流すだけが良い"],
  ["skip", "描写も要らない（事後形式）"],
];
export const RP_POLICY_MAP = Object.fromEntries(RP_POLICY_OPTS);

// ── 進行時間 ────────────────────────────────────────────────────────────────
export const PROGRESS_TIME_OPTS = [
  ["oneshot", "1シナリオ内で最終ラインまで行きたい"],
  ["gradual", "継続を通じて段階を得たい"],
];
export const PROGRESS_TIME_MAP = Object.fromEntries(PROGRESS_TIME_OPTS);

// ── 展開・接触許容 ──────────────────────────────────────────────────────────
export const CONTACT_RANGE_ITEMS = [
  "なし",
  "包容",
  "キス",
  "ソフト（R15）",
  "ハード（R18）",
  "特殊性癖",
  "猟奇的表現（R18G）",
];

// ── 解放条件 ────────────────────────────────────────────────────────────────
export const UNLOCK_CONDITION_OPTS = [
  ["lovers", "恋人同士"],
  ["romantic", "PCが相手を恋愛対象と認識している"],
  ["care", "PCが相手を大切だと認識している"],
  ["interest", "目的の利害が一致した時"],
  ["agreement", "PL同士の合意があれば可能"],
  ["dice", "精神衰弱・発狂時などのダイスによる結果"],
];
export const UNLOCK_MAP = Object.fromEntries(UNLOCK_CONDITION_OPTS);

// ── 関係タグ ────────────────────────────────────────────────────────────────
export const REL_TAG_GROUPS = [
  [
    "日常・関係性",
    [
      "友人", "親友", "幼馴染", "年の差", "仕事仲間", "上司/部下",
      "相方/バディ", "元・○○", "悪友", "同居人", "追っかけ・ファン", "凸凹",
    ],
  ],
  [
    "家族・主従・契約",
    [
      "きょうだい（血縁）", "きょうだい（疑似）", "親子（血縁）", "親子（疑似）",
      "師弟", "主従", "契約関係", "理解者", "利害の一致",
    ],
  ],
  [
    "恋愛・親密",
    ["片思い", "両片思い", "恋人", "夫婦", "初恋", "お試し交際", "貞操逆転"],
  ],
  ["対立・緊張", ["ライバル", "犬猿", "宿敵", "仇"]],
  [
    "歪んだ関係・依存",
    ["セフレ", "執着", "愛憎", "崇拝", "飼育", "加害被害関係"],
  ],
  [
    "特殊・設定系",
    ["人外と人間", "共犯者", "共依存", "身代わり", "救済", "天才/秀才", "運命共同体"],
  ],
];
export const REL_TAG_ITEMS = REL_TAG_GROUPS.flatMap(([, items]) => items);

// ── センシティブタグ ─────────────────────────────────────────────────────────
export const SENSITIVE_GROUPS = [
  [
    "肉体・バイオレンス",
    [
      "暴力行為", "リョナ", "四肢欠損", "カニバリズム", "ゴア表現", "薬物",
      "妊娠・出産", "女装・男装", "女体化・男体化", "スカトロ",
    ],
  ],
  [
    "精神・尊厳破壊",
    ["洗脳", "廃人化", "精神的屈服", "記憶喪失", "自己犠牲", "いじめ・ハラスメント"],
  ],
  [
    "関係性・愛執",
    [
      "依存", "共依存", "執着", "監禁", "無理やり", "ストーカー", "裏切り",
      "見捨て", "見捨てられ", "仲違い", "NTR", "売春", "人身売買", "モブ介入",
    ],
  ],
  [
    "運命・倫理・結末",
    [
      "心中", "死別", "メリバ", "近親相姦", "未成年（教師生徒など）",
      "犯罪行為", "人外化・寄生", "クローン・偽物",
    ],
  ],
];

// ── 身体パーツ ──────────────────────────────────────────────────────────────
export const BODY_PART_ITEMS = [
  "メイク", "まつ毛", "唇", "ほくろ", "胸", "筋肉",
  "腰", "お尻", "太もも", "足の長さ", "傷跡・火傷",
];

// ── カラー ──────────────────────────────────────────────────────────────────
export const COLOR_ITEMS = ["無", "赤", "オレンジ", "黄", "緑", "青", "紫", "ピンク"];
export const COLOR_MAP = {
  無: { bg: "#e4e0ec", fg: "#555" },
  赤: { bg: "#e84040", fg: "#fff" },
  オレンジ: { bg: "#f07020", fg: "#fff" },
  黄: { bg: "#c8a800", fg: "#fff" },
  緑: { bg: "#28a050", fg: "#fff" },
  青: { bg: "#2060d0", fg: "#fff" },
  紫: { bg: "#8040c0", fg: "#fff" },
  ピンク: { bg: "#d060a0", fg: "#fff" },
};

// ── VIEW_CATEGORIES ──────────────────────────────────────────────────────────
// view.html が使用するカテゴリ定義。
// type: "text" | "tags" | "tags_map" | "radio_map" | "range" | "tog_tags" | "contact_conds"
export const VIEW_CATEGORIES = [
  {
    key: "charPreview",
    title: "✨ キャラクター予定",
    fields: [
      { key: "ownerCharPreview", label: "自分のキャラ予定", type: "text" },
      { key: "partnerCharPreview", label: "相手のキャラへのイメージ", type: "text" },
    ],
  },
  {
    key: "relationship",
    title: "💭 関係",
    fields: [
      { key: "relationshipTags", label: "関係タグ", type: "tags" },
      { key: "pairGender", label: "ペア種別", type: "tags_map", map: PAIR_GENDER_MAP },
      { key: "desiredRelationship", label: "希望する関係の形", type: "text" },
      { key: "initialAffection", label: "初期好感度（苦手 ↔ 好き）", type: "range" },
      { key: "finalAffection", label: "最終好感度（苦手 ↔ 好き）", type: "range" },
      { key: "emotionTypes", label: "感情タイプ", type: "tags" },
      { key: "progressionTime", label: "進行時間", type: "tags_map", map: PROGRESS_TIME_MAP },
      { key: "desiredSituation", label: "希望するシチュエーション", type: "text" },
    ],
  },
  {
    key: "sexual",
    title: "💕 性的傾向",
    fields: [
      { key: "ribaPref", label: "リバについて", type: "radio_map", map: RIBA_PREF_MAP },
      { key: "ribaCondition", label: "リバ条件", type: "text" },
      { key: "desiredPosition", label: "ポジション", type: "radio_map", map: POS_MAP },
      { key: "desiredPositionComment", label: "ポジション補足", type: "text" },
      { key: "rpPolicy", label: "描写方針", type: "radio_map", map: RP_POLICY_MAP },
      { key: "contactRange", label: "展開の許容範囲", type: "tags" },
      { key: "contactConditions", label: "解放条件", type: "contact_conds" },
      { key: "threelComment", label: "自由コメント", type: "text" },
    ],
  },
  {
    key: "sensitive",
    title: "🚫 地雷・センシティブ",
    fields: [
      { key: "r18Preference", label: "R18（性的表現）", type: "radio_map", map: R18_MAP },
      { key: "r18Comment", label: "R18 条件・理由", type: "text" },
      { key: "r18Position", label: "R18 可能なポジション", type: "radio_map", map: R18_POSITION_MAP },
      { key: "r18gPreference", label: "R18G（暴力・グロ）", type: "radio_map", map: R18_MAP },
      { key: "r18gComment", label: "R18G 条件・理由", type: "text" },
      { key: "r18gPosition", label: "R18G 可能なポジション", type: "radio_map", map: R18_POSITION_MAP },
      { key: "sensitiveTags", label: "センシティブタグ", type: "tog_tags" },
      { key: "sensitiveNote", label: "補足コメント", type: "text" },
    ],
  },
  {
    key: "appearance",
    title: "👤 外見",
    fields: [
      { key: "ageRange", label: "年齢帯", type: "range", unit: "歳", absMin: 9, absMax: 40 },
      { key: "heightRange", label: "身長帯", type: "range", unit: "cm", absMin: 120, absMax: 220 },
      { key: "bodyType", label: "体型（細め ↔ がっちり）", type: "range" },
      { key: "bodyParts", label: "パーツ希望（♡/✕）", type: "tog_tags" },
      { key: "eyeShape", label: "目の形（切れ目 ↔ 垂れ目）", type: "range" },
      { key: "eyeSize", label: "目の大きさ（小さい ↔ 大きめ）", type: "range" },
      { key: "eyeColorList", label: "目の色", type: "tags" },
      { key: "eyeBrightness", label: "目の明度（暗い ↔ 明るい）", type: "range" },
      { key: "eyeSaturation", label: "目の彩度（無彩 ↔ 鮮やか）", type: "range" },
      { key: "eyebrowAngle", label: "眉のカーブ（垂れ ↔ 吊り）", type: "range" },
      { key: "eyebrowThickness", label: "眉の太さ（細 ↔ 太）", type: "range" },
      { key: "eyebrowLength", label: "眉の長さ（短 ↔ 長）", type: "range" },
      { key: "eyebrowEyeDistance", label: "目との距離（近い ↔ 遠い）", type: "range" },
      { key: "faceImpression1", label: "顔の系統（可愛い ↔ 格好いい）", type: "range" },
      { key: "faceImpression2", label: "雰囲気（色気 ↔ 無骨）", type: "range" },
      { key: "hairWave", label: "髪質（ウェーブ ↔ ストレート）", type: "range" },
      { key: "hairLength", label: "髪の長さ（短い ↔ 長い）", type: "range" },
      { key: "hairColorList", label: "髪色", type: "tags" },
      { key: "hairBrightness", label: "髪の明度（暗い ↔ 明るい）", type: "range" },
      { key: "hairSaturation", label: "髪の彩度（無彩 ↔ 鮮やか）", type: "range" },
      { key: "hairStyle", label: "髪型", type: "text" },
      { key: "vibe", label: "全体的な雰囲気", type: "text" },
      { key: "appearanceNG", label: "外見NG要素", type: "text" },
    ],
  },
  {
    key: "personality",
    title: "🧠 性格",
    fields: [
      { key: "lightDark", label: "明るさ（暗め ↔ 明るい）", type: "range" },
      { key: "pastWeight", label: "過去の重さ（薄め ↔ 重め）", type: "range" },
      { key: "sadismMasochism", label: "S/M気質（M ↔ S）", type: "range" },
      { key: "tsunDere", label: "ツン/デレ（デレ ↔ ツン）", type: "range" },
      { key: "mentalStrength", label: "メンタル強度（弱め ↔ 強め）", type: "range" },
      { key: "emotionExpression", label: "感情表現（無口 ↔ 豊か）", type: "range" },
      { key: "dependencyLevel", label: "依存度（自立 ↔ 依存）", type: "range" },
      { key: "initiative", label: "主導権（ついていく ↔ リード）", type: "range" },
      { key: "personalSpace", label: "パーソナルスペース（広い ↔ 狭い）", type: "range" },
      { key: "trustStyle", label: "信頼の形（疑い深い ↔ 盲信）", type: "range" },
      { key: "ethics", label: "倫理観（善・合理的 ↔ 悪・感情的）", type: "range" },
      { key: "extroversion", label: "外向性（内向 ↔ 外向）", type: "range" },
      { key: "intellectLevel", label: "知的レベル（直感 ↔ 理論）", type: "range" },
      { key: "secretiveness", label: "隠し事（オープン ↔ 秘密主義）", type: "range" },
      { key: "innerVoice", label: "心の声（表裏なし ↔ 裏表あり）", type: "range" },
      { key: "composure", label: "余裕（ある ↔ ない）", type: "range" },
      { key: "pride", label: "プライド（高い ↔ 低い）", type: "range" },
      { key: "emotionWeight", label: "感情の重さ（軽い ↔ 重い）", type: "range" },
      { key: "possessiveness", label: "独占欲（なし ↔ 強い）", type: "range" },
      { key: "sincerity", label: "素直さ（あまのじゃく ↔ 正直）", type: "range" },
      { key: "likes", label: "入れて欲しい性格要素", type: "text" },
      { key: "dislikes", label: "入れて欲しくない性格要素", type: "text" },
    ],
  },
];

// ── EDITOR_SCHEMA ────────────────────────────────────────────────────────────
// editor.html が使用するセクション・フィールド定義。
// side: "left" | "right"
// type: "テキスト" | "選択" | "複数選択" | "スライダー" | "トグル" | "カラー" | "動的"
// options: [[value, label], ...] — per-option ON/OFF 用
export const EDITOR_SCHEMA = [
  {
    id: "sec-charpreview",
    title: "✨ キャラクター予定（ラフ案）",
    side: "left",
    fields: [
      { key: "ownerCharPreview", label: "自分のキャラ予定", type: "テキスト" },
      { key: "partnerCharPreview", label: "相手のキャラへの希望イメージ", type: "テキスト" },
    ],
  },
  {
    id: "sec-relreq",
    title: "💭 関係",
    side: "left",
    fields: [
      {
        key: "pairGender",
        label: "今回やりたいペア種別（複数可）",
        type: "複数選択",
        options: PAIR_GENDER_OPTS,
      },
      {
        key: "relationshipTags",
        label: "今回やりたい関係タグ（複数可）",
        type: "複数選択",
        options: REL_TAG_ITEMS.map((t) => [t, t]),
      },
      { key: "desiredRelationship", label: "希望する関係の形", type: "テキスト" },
      { key: "initialAffection", label: "初期好感度", type: "スライダー" },
      { key: "finalAffection", label: "最終好感度（想定）", type: "スライダー" },
      { key: "emotionTypes", label: "感情タイプ（複数可）", type: "動的" },
      {
        key: "progressionTime",
        label: "関係値の進行時間について",
        type: "複数選択",
        options: PROGRESS_TIME_OPTS,
      },
      { key: "desiredSituation", label: "希望するシチュエーション", type: "テキスト" },
    ],
  },
  {
    id: "sec-pl3l",
    title: "💕 性的傾向（接触許容範囲）",
    side: "left",
    fields: [
      {
        key: "ribaPref",
        label: "左右の固定・リバについて",
        type: "選択",
        options: RIBA_PREF_OPTS,
      },
      {
        key: "desiredPosition",
        label: "希望するポジション",
        type: "選択",
        options: POS_OPTS,
      },
      {
        key: "contactRange",
        label: "物理的接触の許容範囲（複数可）",
        type: "複数選択",
        options: CONTACT_RANGE_ITEMS.map((t) => [t, t]),
      },
      {
        key: "rpPolicy",
        label: "描写方針（1つ選択）",
        type: "選択",
        options: RP_POLICY_OPTS,
      },
      { key: "threelComment", label: "補足コメント", type: "テキスト" },
    ],
  },
  {
    id: "sec-plsensitive",
    title: "🚫 地雷・センシティブ",
    side: "left",
    fields: [
      {
        key: "r18Preference",
        label: "R18 表現の可否",
        type: "選択",
        options: R18_PREF_OPTS,
      },
      {
        key: "r18Position",
        label: "R18 可能なポジション",
        type: "選択",
        options: R18_POSITION_OPTS,
      },
      {
        key: "r18gPreference",
        label: "R18G 表現の可否",
        type: "選択",
        options: R18_PREF_OPTS,
      },
      {
        key: "r18gPosition",
        label: "R18G 可能なポジション",
        type: "選択",
        options: R18_POSITION_OPTS,
      },
      {
        key: "sensitiveTags",
        label: "センシティブタグ",
        type: "トグル",
        options: SENSITIVE_GROUPS.flatMap(([, items]) => items.map((t) => [t, t])),
      },
      { key: "sensitiveNote", label: "補足コメント", type: "テキスト" },
    ],
  },
  {
    id: "sec-appearance",
    title: "👤 外見",
    side: "right",
    fields: [
      { key: "ageRange", label: "年齢帯", type: "スライダー" },
      { key: "heightRange", label: "身長帯", type: "スライダー" },
      { key: "bodyType", label: "体型", type: "スライダー" },
      {
        key: "bodyParts",
        label: "盛って欲しい、減らして欲しいパーツ（♡盛って欲しい / ✕減らして欲しい）（複数可）",
        type: "トグル",
        options: BODY_PART_ITEMS.map((t) => [t, t]),
      },
      { key: "eyeShape", label: "目の形", type: "スライダー" },
      { key: "eyeSize", label: "目の大きさ", type: "スライダー" },
      {
        key: "eyeColorList",
        label: "目の色（複数可）",
        type: "カラー",
        options: COLOR_ITEMS.map((t) => [t, t]),
      },
      { key: "eyeBrightness", label: "目の明度", type: "スライダー" },
      { key: "eyeSaturation", label: "目の彩度", type: "スライダー" },
      { key: "eyebrowAngle", label: "眉のカーブ", type: "スライダー" },
      { key: "eyebrowThickness", label: "眉の太さ", type: "スライダー" },
      { key: "eyebrowLength", label: "眉の長さ", type: "スライダー" },
      { key: "eyebrowEyeDistance", label: "目との距離", type: "スライダー" },
      { key: "faceImpression1", label: "顔の系統", type: "スライダー" },
      { key: "faceImpression2", label: "雰囲気", type: "スライダー" },
      { key: "hairWave", label: "髪質", type: "スライダー" },
      { key: "hairLength", label: "長さ", type: "スライダー" },
      {
        key: "hairColorList",
        label: "髪色（複数可）",
        type: "カラー",
        options: COLOR_ITEMS.map((t) => [t, t]),
      },
      { key: "hairBrightness", label: "髪の明度", type: "スライダー" },
      { key: "hairSaturation", label: "髪の彩度", type: "スライダー" },
      { key: "hairStyle", label: "髪型", type: "テキスト" },
      { key: "vibe", label: "全体的な雰囲気", type: "テキスト" },
      { key: "appearanceNG", label: "外見NG要素", type: "テキスト" },
    ],
  },
  {
    id: "sec-personality",
    title: "🧠 性格",
    side: "right",
    fields: [
      { key: "lightDark", label: "明るさ", type: "スライダー" },
      { key: "pastWeight", label: "過去の重さ", type: "スライダー" },
      { key: "sadismMasochism", label: "S/M気質", type: "スライダー" },
      { key: "tsunDere", label: "ツン／デレ", type: "スライダー" },
      { key: "mentalStrength", label: "メンタル強度", type: "スライダー" },
      { key: "emotionExpression", label: "感情表現", type: "スライダー" },
      { key: "dependencyLevel", label: "依存度", type: "スライダー" },
      { key: "initiative", label: "主導権", type: "スライダー" },
      { key: "personalSpace", label: "パーソナルスペース", type: "スライダー" },
      { key: "trustStyle", label: "信頼の形", type: "スライダー" },
      { key: "ethics", label: "倫理観", type: "スライダー" },
      { key: "extroversion", label: "外向性", type: "スライダー" },
      { key: "intellectLevel", label: "知的レベル", type: "スライダー" },
      { key: "secretiveness", label: "隠し事", type: "スライダー" },
      { key: "innerVoice", label: "心の声", type: "スライダー" },
      { key: "composure", label: "余裕", type: "スライダー" },
      { key: "pride", label: "プライド", type: "スライダー" },
      { key: "emotionWeight", label: "感情の重さ", type: "スライダー" },
      { key: "possessiveness", label: "独占欲", type: "スライダー" },
      { key: "sincerity", label: "素直さ", type: "スライダー" },
      { key: "likes", label: "入れて欲しい性格要素", type: "テキスト" },
      { key: "dislikes", label: "入れて欲しくない性格要素", type: "テキスト" },
    ],
  },
];
