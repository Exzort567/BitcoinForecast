import Astro from "../src/images/programs_planets.png";
import Ta from "../src/images/programs_ta.png";
import Chart from "../src/images/programs_chart.png";
import Success from "../src/images/programs_success.png";
import Mentoring from "../src/images/programs_mentoring.png";
import August from "../src/images/aug1Profit.jpg"
import November from "../src/images/nov1Profit.jpg"
import October from "../src/images/oct1Profit.jpg"
import September from "../src/images/sep1Profit.jpg"

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Contact",
        path: '/contact'
    }
];

export const benefits = [
    {
        id: 1,
        title: "WEEKLY PREDICTION USING PLANETARY ALIGNMENT",
        img: Astro
    },
    {
        id: 2,
        title: "WEEKLY MARKET RECAP/ANALYSIS (LIVE)",
        img: Ta
    },
    {
        id: 3,
        title: "PERFORMANCE REVIEW",
        img: Chart
    },
    {
        id: 4,
        title: "PRIVATE GROUP ACCESS",
        img: Success
    },
    {
        id: 5,
        title: "LIVE MONTHLY MENTORING",
        img: Mentoring
    },
    {
        id: 6,
        title: "EDUCATIONAL CONTENTS",
        img: Mentoring
    }
    

];

export const performance = [
    {
        id: 1,
        title: "AUGUST",
        img: August
    },
    {
        id: 2,
        title: "SEPTEMBER",
        img: September
    },
    {
        id: 3,
        title: "OCTOBER",
        img: October
    },
    {
        id: 4,
        title: "NOVEMBER",
        img: November
    }

];

export const faqs = [
    {
        id: 1,
        question: "What is Bitcoin Forecast?",
        answer: "Bitcoin Forecast is a group that provides signals for trading Bitcoin using a combination of price action analysis and astrology-based strategies. They also offer a free course on YouTube."
    },
    {
        id: 2,
        question: "How does Bitcoin Forecast generate signals?",
        answer: "Bitcoin Forecast generates signals for trading Bitcoin by analyzing price action movements and incorporating astrology-based strategies into their analysis."
    },
    {
        id: 3,
        question: "Is Bitcoin Forecast's approach reliable?",
        answer: "The reliability of Bitcoin Forecast's approach may vary depending on individual perspectives. While some traders find their methods effective, others may have different opinions. It's essential to conduct thorough research and evaluate their signals before making trading decisions."
    },
    {
        id: 4,
        question: "Does Bitcoin Forecast offer any educational resources?",
        answer: "Yes, Bitcoin Forecast provides a free course on YouTube where they share insights into their trading strategies and techniques. Traders can access this resource to learn more about their approach."
    },
    {
        id: 5,
        question: "What is the significance of astrology in Bitcoin Forecast's strategy?",
        answer: "Bitcoin Forecast incorporates astrology into their trading strategy to interpret potential market movements. While some traders may find this unconventional, Bitcoin Forecast believes it adds another layer of analysis to their predictions."
    },
    {
        id: 6,
        question: "Can anyone join Bitcoin Forecast?",
        answer: "Yes, Bitcoin Forecast is open to anyone interested in their trading signals and educational content. Traders can follow their YouTube channel or join their community to access their resources and signals."
    }
];

export const testimonials = [
    {
        id:1,
        name: "REYNIEL",
        testimony: "Napaka helpful nung forecast coach kase apaka detailed like kada araw tapos yung time of the day na possible na mangyare, at yung sa for spot trade naman nagamit ko rin sya although nag eexpect ako ng pullback kay btc kaya lang di nangyare pero sa ibang alts ako nakahanap ng pullback kaya dun ako naka entry and now malaki laki na rin yung gains hahahaah 🔥 thank you coachh!",
        membership: "PRIVATE GROUP MEMBER",
        profile: require("./images/male.png")
    },
    {
        id:2,
        name: "RONJIE",
        testimony: "Good morning coach! It has helped me to make good trading decisions on specific days and so far all the forecasts has been accurate!❤️",
        membership: "PRIVATE GROUP MEMBER",
        profile: require("./images/male.png")
    },
    {
        id:3,
        name: "GEMS HUNTER",
        testimony: "It helps a lot into my trading decision as I can prepare ahead of time even not monitoring the market. Hope you’ll continue give us guidance by providing us daily forecast by sending it weekly. Salamat ❤️",
        membership: "PRIVATE GROUP MEMBER",
        profile: require("./images/male.png")
    },
    {
        id:4,
        name: "BURHAN",
        testimony: "10/10 helpful",
        membership: "PRIVATE GROUP MEMBER",
        profile: require("./images/male.png")
    },
    {
        id:5,
        name: "JAY",
        testimony: "hi sir good evening... appreciation message lang kase dahil sa forecast mo nababawi ko na losses ko dahil nakasabay po ako sa pump dahil naka position ako sa baba dahil sa prediction mo. nakita ko din po kase na nag out kana ng position kaya nag out nadin ako with small profit pero sobrang sarap sa feeling mag papasko akong hindi ipit... Hindi ito magiging possible if di ako nag join sa forecast mo... Di jase ako naniniwala sa mga ganto pero tinry ko lang mura naman. Ito pinaka wise ginawa ko this year... Salamat sir mag papasko akong masaya ilang months din kase ako naipit",
        membership: "PRIVATE GROUP MEMBER",
        profile: require("./images/male.png")
    }
    ,{
        id:6,
        name: "SOFIA",
        testimony: "highly recommended",
        membership: "PRIVATE GROUP MEMBER",
        profile: require("./images/female.png")
    }
];

export const plans = [
    {
        id: 1,
        name: 'BASIC PLAN',
        desc: '1week access',
        price: '399 PHP',
        features: [
            {feature: '1week access'},
            {feature: '1week prediction'},
            {feature: '1week private group access'}
        ]
    },
    {
        id: 2,
        name: 'SILVER PLAN',
        desc: '1month access',
        price: '800 PHP',
        features: [
            {feature: '1month private group access'},
            {feature: 'Weekly prediction for 1 month'},
            {feature: 'Weekly trading recap for 1 month'},
            {feature: 'Educational contents'}
        ]
    },
    {
        id: 3,
        name: 'PREMIUM PLAN',
        desc: '1year all access',
        price: '3500 PHP',
        features: [
            {feature: '1year private group access'},
            {feature: '1year Weekly prediction'},
            {feature: 'Weekly trading recap/technical analysis(LIVE)'},
            {feature: 'Educational contents'},
            {feature: 'Monthly mentoring access'}
        ]
    }
]