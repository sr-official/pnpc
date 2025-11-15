// ----------------------
// SAMPLE DATA STRUCTURE
// ----------------------

class Team {
    constructor(name, r1, r2, r3, r4, r5, r6, govTeam, oppTeam) {
        this.name = name;
        this.r = [r1, r2, r3, r4, r5, r6];
        this.total = this.r.reduce((a, b) => a + b, 0);
        this.govTeam = govTeam;
        this.oppTeam = oppTeam;
    }
}

class Speaker {
    constructor(name, r1, r2, r3, r4, r5, r6) {
        this.name = name;
        this.r = [r1, r2, r3, r4, r5, r6];
        this.total = this.r.reduce((a, b) => a + b, 0);
    }
}

class Adjudicator {
    constructor(name, designation) {
        this.name = name;
        this.designation = designation;
    }
}

class Motion {
    constructor(title, text, info) {
        this.title = title;
        this.text = text;
        this.info = info;
    }
}

class Debate {
    constructor(round, gov, opp, venue, time, judge, winner) {
        this.round = round;   // NEW: round number or name
        this.gov = gov;
        this.opp = opp;
        this.venue = venue;
        this.time = time;
        this.judge = judge;
        this.winner = winner;
    }
}

class Result {
    constructor(round, motion, gov, opp, winner, adjudicator) {
        this.round = round;
        this.motion = motion;
        this.gov = gov;
        this.opp = opp;
        this.winner = winner;
        this.adjudicator = adjudicator;
    }
}

// News class
class News {
    constructor(title, date, link) {
        this.title = title;
        this.date = date;
        this.link = link;
    }
}


// ----------------------
// SAMPLE DATA
// ----------------------

const teams = [
    // new Team("Mindscript (BBA)", 225.5, 226, 230, 0, 0, 0),
    // new Team("The Infinity Achiever (BBA)", 225, 152, 0, 0, 0, 0),
    // new Team("Warriors (LLB)", 232, 228, 231, 227, 0, 0),
    // new Team("Treble Trouble (LLB)", 223, 225, 229, 0, 0, 0),
    // new Team("NSA Gladiators (BBA)", 232, 226, 227, 225.5, 0, 0),
    // new Team("Thinker Alliance (JRN)", 230, 228, 230, 0, 0, 0),
    // new Team("JB Empire (BBA)", 230, 225, 223, 0, 0, 0),
    // new Team("The Rationalist (BTE)", 227, 227, 225, 0, 0, 0),
    // new Team("Paradox (JRN)", 233, 225, 75, 0, 0, 0),
    // new Team("Debate Crew(ENG)", 225, 226, 235, 0, 0, 0),
    // new Team("Galaxy (BBA)", 227, 227, 229, 0, 0, 0),
    // new Team("Think Thank (LLB)", 227, 226, 236, 228, 0, 0),
    // new Team("Skylark (ENG)", 228, 233, 228, 0, 0, 0),
    // new Team("Ideology Warriors(JRN)", 153, 157, 226, 233, 0, 0),
    // new Team("The Facists(ENG)", 226, 229, 237, 231, 0, 0),
    // new Team("Phoenix (ENG)", 226, 224, 228, 0, 0, 0),
    // new Team("Echo Verse (BBA)", 225, 230, 232, 230, 0, 0),
    // new Team("Green Apple(BBA)", 230, 225, 225.5, 0, 0, 0),
    // new Team("Trio of Logic (BTE)", 227, 228, 232, 229, 0, 0),
    // new Team("Purbasha (BFT)", 228, 225.5, 227, 0, 0, 0),
    // new Team("Fact Finders (JRN)", 151, 152, 0, 0, 0, 0),
    // new Team("Justice Seekers (LLB)", 226, 226.5, 0, 0, 0, 0),
    // new Team("The Nexus (BTE)", 229, 235, 232, 233, 0, 0),
    // new Team("Undertop (LLB)", 230, 227, 229, 0, 0, 0),

		new Team("Mindscript (BBA)", 0, 0, 0, 0, 0, 0),
    new Team("The Infinity Achiever (BBA)", 0, 0, 0, 0, 0, 0),
    new Team("Warriors (LLB)", 0, 0, 0, 0, 0, 0),
    new Team("Treble Trouble (LLB)", 0, 0, 0, 0, 0, 0),
    new Team("NSA Gladiators (BBA)", 0, 0, 0, 0, 0, 0),
    new Team("Thinker Alliance (JRN)", 0, 0, 0, 0, 0, 0),
    new Team("JB Empire (BBA)", 0, 0, 0, 0, 0, 0),
    new Team("The Rationalist (BTE)", 0, 0, 0, 0, 0, 0),
    new Team("Paradox (JRN)", 0, 0, 0, 0, 0, 0),
    new Team("Debate Crew(ENG)", 0, 0, 0, 0, 0, 0),
    new Team("Galaxy (BBA)", 0, 0, 0, 0, 0, 0),
    new Team("Think Thank (LLB)", 0, 0, 0, 0, 0, 0),
    new Team("Skylark (ENG)", 0, 0, 0, 0, 0, 0),
    new Team("Ideology Warriors(JRN)", 0, 0, 0, 0, 0, 0),
    new Team("The Facists(ENG)", 0, 0, 0, 0, 0, 0),
    new Team("Phoenix (ENG)", 0, 0, 0, 0, 0, 0),
    new Team("Echo Verse (BBA)", 0, 0, 0, 0, 0, 0),
    new Team("Green Apple(BBA)", 0, 0, 0, 0, 0, 0),
    new Team("Trio of Logic (BTE)", 0, 0, 0, 0, 0, 0),
    new Team("Purbasha (BFT)", 0, 0, 0, 0, 0, 0),
    new Team("Fact Finders(JRN)", 0, 0, 0, 0, 0, 0),
    new Team("Justice Seekers (LLB)", 0, 0, 0, 0, 0, 0),
    new Team("The Nexus (BTE)", 0, 0, 0, 0, 0, 0),
    new Team("Undertop (LLB)", 0, 0, 0, 0, 0, 0),
];

const speakers = [
    // new Speaker("Sumaiya Mazumder", 75.5, 76, 77, 0, 0, 0),
    // new Speaker("Nadia Khanam", 75, 75, 76, 0, 0, 0),
    // new Speaker("Maisha Maliha", 75, 75, 77, 0, 0, 0),
    // new Speaker("Moumita Dasgupta", 75, 0, 0, 0, 0, 0),
    // new Speaker("Happy Das", 75, 76, 0, 0, 0, 0),
    // new Speaker("Shahina Sultana Koli", 75, 76, 0, 0, 0, 0),
    // new Speaker("Sumi", 77, 76, 77, 76, 0, 0),
    // new Speaker("Oishorjo", 77, 76, 76, 75, 0, 0),
    // new Speaker("Shihir", 78, 76, 78, 76, 0, 0),
    // new Speaker("Nahim Islam", 74, 75, 77, 0, 0, 0),
    // new Speaker("Saima Akter", 75, 75, 76, 0, 0, 0),
    // new Speaker("Sayeda Taifatul Ferdous", 74, 75, 76, 0, 0, 0),
    // new Speaker("Nazma Akter", 75, 76, 76, 75.5, 0, 0),
    // new Speaker("Abdullah Al Shajid", 78, 75, 75, 75, 0, 0),
    // new Speaker("Aslam Babu", 79, 75, 76, 75, 0, 0),
    // new Speaker("Abdullah Al Mohammed", 77, 76, 77, 0, 0, 0),
    // new Speaker("Tasmin Haque", 76, 77, 77, 0, 0, 0),
    // new Speaker("Asmam Uddin Chowdhury", 77, 75, 76, 0, 0, 0),
    // new Speaker("Prithom Paul", 75, 75, 74, 0, 0, 0),
    // new Speaker("Md Habibur Rahman", 78, 75, 75, 0, 0, 0),
    // new Speaker("Md Shifat", 77, 75, 74, 0, 0, 0),
    // new Speaker("Md Al Amin Kayes", 76, 76, 75, 0, 0, 0),
    // new Speaker("Md SaJidur Rahman Bijoy", 75, 76, 75, 0, 0, 0),
    // new Speaker("Arman Hossen Asif", 76, 75, 75, 0, 0, 0),
    // new Speaker("Safa Marwa", 76, 75, 0, 0, 0, 0),
    // new Speaker("Abu Saleh", 78, 75, 0, 0, 0, 0),
    // new Speaker("Riduan Haque", 79, 75, 75, 0, 0, 0),
    // new Speaker("Atik Hossen", 75, 76, 79, 0, 0, 0),
    // new Speaker("Joy Barua", 75, 75, 78, 0, 0, 0),
    // new Speaker("Rimon Dey", 75, 75, 78, 0, 0, 0),
    // new Speaker("Upama Sengupta", 77, 78, 78, 0, 0, 0),
    // new Speaker("Renesa Chakma", 75, 74, 76, 0, 0, 0),
    // new Speaker("Snikdha Dhar", 75, 75, 75, 0, 0, 0),
    // new Speaker("Dipa Chowdhury", 77, 75, 79, 75, 0, 0),
    // new Speaker("Md Jahid Hasan", 75, 76, 77, 76, 0, 0),
    // new Speaker("Mosammat Tanjina Akter Chy", 75, 75, 80, 77, 0, 0),
    // new Speaker("Behestie Akter Reya", 75, 77, 76, 0, 0, 0),
    // new Speaker("Khadiza Akter", 77, 79, 77, 0, 0, 0),
    // new Speaker("Nusrat jahan Nishat", 76, 77, 75, 0, 0, 0),
    // new Speaker("Md Soharaf", 76, 78, 75, 76, 0, 0),
    // new Speaker("Shefa Ahmed", 77, 79, 76, 79, 0, 0),
    // new Speaker("", 0, 0, 75, 78, 0, 0),
    // new Speaker("Asif Mahmud Khan", 76, 77, 78, 76, 0, 0),
    // new Speaker("Abu Zubayer", 75, 76, 80, 78, 0, 0),
    // new Speaker("Shahriar Fahmid", 75, 76, 79, 77, 0, 0),
    // new Speaker("Joyita Ghosh", 76, 75, 76, 0, 0, 0),
    // new Speaker("Naima Jannat Hamida", 75, 75, 76, 0, 0, 0),
    // new Speaker("Nazmun Nahar Nijhum", 75, 74, 76, 0, 0, 0),
    // new Speaker("Sajjad Hosen Rifat", 75, 78, 79, 77, 0, 0),
    // new Speaker("Tanjina Akther", 75, 76, 75, 77, 0, 0),
    // new Speaker("Muntasir Shoeb", 75, 76, 78, 76, 0, 0),
    // new Speaker("Md Tahim Ahamed", 78, 75, 75.5, 0, 0, 0),
    // new Speaker("Shahadat Hossain Jayed", 76, 75, 75, 0, 0, 0),
    // new Speaker("Md Abdulla Al Nahid", 76, 75, 75, 0, 0, 0),
    // new Speaker("Sahanaz Akter Any", 78, 76, 79, 77, 0, 0),
    // new Speaker("Etika Jahan Lilika", 75, 75, 78, 76, 0, 0),
    // new Speaker("Mahin Mahmud Emon", 74, 77, 75, 76, 0, 0),
    // new Speaker("Md Mustafa Kamal", 76, 75.5, 76, 0, 0, 0),
    // new Speaker("Farzana Akter Asha", 75, 75, 76, 0, 0, 0),
    // new Speaker("Tasnia Salmina", 77, 75, 75, 0, 0, 0),
    // new Speaker("Sadia Fazana", 76, 76, 0, 0, 0, 0),
    // new Speaker("Sabikun Nahar Joni", 75, 76, 0, 0, 0, 0),
    // new Speaker("Jannatul Maowa Sharifa", 0, 0, 0, 0, 0, 0),
    // new Speaker("Tohidul Islam Adil", 75, 75, 0, 0, 0, 0),
    // new Speaker("Nusrat Jahan Faria", 77, 76.5, 0, 0, 0, 0),
    // new Speaker("Anisha Dey", 74, 75, 0, 0, 0, 0),
    // new Speaker("MD Sultanul Arfin", 76, 78, 77, 78, 0, 0),
    // new Speaker("Nazmul Hasan Joy", 76, 77, 77, 76, 0, 0),
    // new Speaker("Mohima Sultana Masuma", 77, 80, 78, 79, 0, 0),
    // new Speaker("Athoy Chakraborty", 78, 79, 77, 0, 0, 0),
    // new Speaker("Ashabul Haque Sakib", 77, 74, 76, 0, 0, 0),
    // new Speaker("Tazbir Ahmed Sami", 75, 74, 76, 0, 0, 0),




    new Speaker("Sumaiya Mazumder", 0, 0, 0, 0, 0, 0),
    new Speaker("Nadia Khanam", 0, 0, 0, 0, 0, 0),
    new Speaker("Maisha Maliha", 0, 0, 0, 0, 0, 0),
    new Speaker("Moumita Dasgupta", 0, 0, 0, 0, 0, 0),
    new Speaker("Happy Das", 0, 0, 0, 0, 0, 0),
    new Speaker("Shahina Sultana Koli", 0, 0, 0, 0, 0, 0),
    new Speaker("Sumi", 0, 0, 0, 0, 0, 0),
    new Speaker("Oishorjo", 0, 0, 0, 0, 0, 0),
    new Speaker("Shihir", 0, 0, 0, 0, 0, 0),
    new Speaker("Nahim Islam", 0, 0, 0, 0, 0, 0),
    new Speaker("Saima Akter", 0, 0, 0, 0, 0, 0),
    new Speaker("Sayeda Taifatul Ferdous", 0, 0, 0, 0, 0, 0),
    new Speaker("Nazma Akter", 0, 0, 0, 0, 0, 0),
    new Speaker("Abdullah Al Shajid", 0, 0, 0, 0, 0, 0),
    new Speaker("Aslam Babu", 0, 0, 0, 0, 0, 0),
    new Speaker("Abdullah Al Mohammed", 0, 0, 0, 0, 0, 0),
    new Speaker("Tasmin Haque", 0, 0, 0, 0, 0, 0),
    new Speaker("Asmam Uddin Chowdhury", 0, 0, 0, 0, 0, 0),
    new Speaker("Prithom Paul", 0, 0, 0, 0, 0, 0),
    new Speaker("Md Habibur Rahman", 0, 0, 0, 0, 0, 0),
    new Speaker("Md Shifat", 0, 0, 0, 0, 0, 0),
    new Speaker("Md Al Amin Kayes", 0, 0, 0, 0, 0, 0),
    new Speaker("Md SaJidur Rahman Bijoy", 0, 0, 0, 0, 0, 0),
    new Speaker("Arman Hossen Asif", 0, 0, 0, 0, 0, 0),
    new Speaker("Safa Marwa", 0, 0, 0, 0, 0, 0),
    new Speaker("Abu Saleh", 0, 0, 0, 0, 0, 0),
    new Speaker("Riduan Haque", 0, 0, 0, 0, 0, 0),
    new Speaker("Atik Hossen", 0, 0, 0, 0, 0, 0),
    new Speaker("Joy Barua", 0, 0, 0, 0, 0, 0),
    new Speaker("Rimon Dey", 0, 0, 0, 0, 0, 0),
    new Speaker("Upama Sengupta", 0, 0, 0, 0, 0, 0),
    new Speaker("Renesa Chakma", 0, 0, 0, 0, 0, 0),
    new Speaker("Snikdha Dhar", 0, 0, 0, 0, 0, 0),
    new Speaker("Dipa Chowdhury", 0, 0, 0, 0, 0, 0),
    new Speaker("Md Jahid Hasan", 0, 0, 0, 0, 0, 0),
    new Speaker("Mosammat Tanjina Akter Chy", 0, 0, 0, 0, 0, 0),
    new Speaker("Behestie Akter Reya", 0, 0, 0, 0, 0, 0),
    new Speaker("Khadiza Akter", 0, 0, 0, 0, 0, 0),
    new Speaker("Nusrat jahan Nishat", 0, 0, 0, 0, 0, 0),
    new Speaker("Md Soharaf", 0, 0, 0, 0, 0, 0),
    new Speaker("Shefa Ahmed", 0, 0, 0, 0, 0, 0),
    new Speaker("", 0, 0, 0, 0, 0, 0),
    new Speaker("Asif Mahmud Khan", 0, 0, 0, 0, 0, 0),
    new Speaker("Abu Zubayer", 0, 0, 0, 0, 0, 0),
    new Speaker("Shahriar Fahmid", 0, 0, 0, 0, 0, 0),
    new Speaker("Joyita Ghosh", 0, 0, 0, 0, 0, 0),
    new Speaker("Naima Jannat Hamida", 0, 0, 0, 0, 0, 0),
    new Speaker("Nazmun Nahar Nijhum", 0, 0, 0, 0, 0, 0),
    new Speaker("Sajjad Hosen Rifat", 0, 0, 0, 0, 0, 0),
    new Speaker("Tanjina Akther", 0, 0, 0, 0, 0, 0),
    new Speaker("Muntasir Shoeb", 0, 0, 0, 0, 0, 0),
    new Speaker("Md Tahim Ahamed", 0, 0, 0, 0, 0, 0),
    new Speaker("Shahadat Hossain Jayed", 0, 0, 0, 0, 0, 0),
    new Speaker("Md Abdulla Al Nahid", 0, 0, 0, 0, 0, 0),
    new Speaker("Sahanaz Akter Any", 0, 0, 0, 0, 0, 0),
    new Speaker("Etika Jahan Lilika", 0, 0, 0, 0, 0, 0),
    new Speaker("Mahin Mahmud Emon", 0, 0, 0, 0, 0, 0),
    new Speaker("Md Mustafa Kamal", 0, 0, 0, 0, 0, 0),
    new Speaker("Farzana Akter Asha", 0, 0, 0, 0, 0, 0),
    new Speaker("Tasnia Salmina", 0, 0, 0, 0, 0, 0),
    new Speaker("Sadia Fazana", 0, 0, 0, 0, 0, 0),
    new Speaker("Sabikun Nahar Joni", 0, 0, 0, 0, 0, 0),
    new Speaker("Jannatul Maowa Sharifa", 0, 0, 0, 0, 0, 0),
    new Speaker("Tohidul Islam Adil", 0, 0, 0, 0, 0, 0),
    new Speaker("Nusrat Jahan Faria", 0, 0, 0, 0, 0, 0),
    new Speaker("Anisha Dey", 0, 0, 0, 0, 0, 0),
    new Speaker("MD Sultanul Arfin", 0, 0, 0, 0, 0, 0),
    new Speaker("Nazmul Hasan Joy", 0, 0, 0, 0, 0, 0),
    new Speaker("Mohima Sultana Masuma", 0, 0, 0, 0, 0, 0),
    new Speaker("Athoy Chakraborty", 0, 0, 0, 0, 0, 0),
    new Speaker("Ashabul Haque Sakib", 0, 0, 0, 0, 0, 0),
    new Speaker("Tazbir Ahmed Sami", 0, 0, 0, 0, 0, 0),
];

const adjudicators = [
    new Adjudicator("Mizanul Hoque", "Chief Adjudicator"),
    new Adjudicator("Yasir Silmy", "Core Adjudicator"),
    new Adjudicator("Farhan Nasir Nirnoy", "Core Adjudicator"),
    new Adjudicator("Jasim Qureshi", "Core Adjudicator"),
    new Adjudicator("Abu Hurairah Bishnoy", "Core Adjudicator"),
    new Adjudicator("Tama Chowdhury", "Core Adjudicator"),
];

const motions = [
    new Motion("Round 1", "এই সংসদ মনে করে কোটা সংস্কার আন্দোলনের চেতনা ভূলন্ঠিত হয়েছে ৷", ""),
    new Motion("Round 2", "এই সংসদ (জাতিসংঘ) গাজার ভূখন্ডে ফিলিস্তিন কর্তৃপক্ষের কর্তৃককে সমর্থন করে ৷", ""),
    new Motion("Round 3", "এই সংসদ খেলোয়াড়দের রাজনীতিতে অংশগ্রহণ সমর্থন করে না ।", ""),
    new Motion("Quarter", "এই সংসদ (বাংলাদেশ), এক প্রার্থীর একাধিক সংসদীয় আসনে নির্বাচন করাকে সমর্থন করে না ।", ""),
    new Motion("Semi-Final", "পরীক্ষার চাপ শিক্ষার্থীদের মানসিক স্বাস্থ্যের জন্য ক্ষতিকর।", ""),
    new Motion("Final Round", "Coming soon...", ""),
];

const debates = [
    new Debate("Round 1", "Mindscript (BBA)", "Echo Verse (BBA)", "Room 110", "-", "Md Shafayet Hossain", "Gov"),
    new Debate("Round 1", "The Infinity Achiever (BBA)", "Green Apple (BBA)", "Room 119", "-", "Abu Hurairh Bishnoy", "Opp"),
    new Debate("Round 1", "NSA Gladiators (BBA)", "JB Empire (BBA)", "Room 112", "-", "Md Abdullah Talbi", "Gov"),
    new Debate("Round 1", " Warriors (LLB)", "Treble Trouble (LLB)", "Room 117", "-", "Mizanul Haque", "Gov"),
    new Debate("Round 1", "Think Thank (LLB)", "Justice Seekers (LLB)", "Room 219", "-", "Farhan Nasir Nirnoy", "Gov"),
    new Debate("Round 1", "Undertop (LLB)", "Galaxy (BBA)", "Room 222", "-", "Nayem Tusher", "Gov"),
    new Debate("Round 1", "Debate Crew (ENG)", "Phoenix (ENG)", "Room 215", "-", "Kuslob Kumar Nath ", "Opp"),
    new Debate("Round 1", "The Facists (ENG)", "Skylark (ENG)", "Room 218", "-", "Jasim Qureshi", "Opp"),
    new Debate("Round 1", "Ideology Warriors (JRN)", "Fact Finders (JRN)", "Room 312", "-", "Tama Chowdhury", "Gov"),
    new Debate("Round 1", "Thinker Alliance (JRN)", "Paradox (JRN)", "Room 315", "-", "", "Opp"),
    new Debate("Round 1", "The Rationalist (BTE)", "The Nexus (BTE)", "Room D305", "-", "Nishu Rani Das", "Opp"),
    new Debate("Round 1", "Purbasha (BFT)", "Trio of Logic (BTE)", "Room D105", "-", "Inkiad", "Gov"),
    new Debate("Round 2", "Fact Finders (JRN)", "Purbasha (BFT)", "Room 212", "-", "Mizanul Haque", "Opp"),
    new Debate("Round 2", "Green Apple (BBA)", "The Rationalist (BTE)", "Room 218", "-", "Kushbo Kumar Nath", "Opp"),
    new Debate("Round 2", "Justice Seekers (LLB)", "The Facists (ENG)", "Room 315", "-", "Nayem Tushar", "Opp"),
    new Debate("Round 2", "Treble Trouble (LLB)", "NSA Gladiators (BBA)", "Room 318", "-", "Md Shafayet Hossen", "Opp"),
    new Debate("Round 2", "Skylark (ENG)", " Mindscript (BBA)", "Room B205", "-", "Tama Chowdury", "Opp"),
    new Debate("Round 2", "Echo Verse (BBA)", " Warriors (LLB)", "Room 221", "-", "Md Abdullah Talbi", "Gov"),
    new Debate("Round 2", "Phoenix (ENG)", "Undertop (LLB)", "Room B204", "-", "Abu Huraira Bishmoy", "Opp"),
    new Debate("Round 2", "JB Empire (BBA)", "Think Thank (LLB)", "Room D305", "-", "Farhan Nasir Nirnoy", "Opp"),
    new Debate("Round 2", "Trio of Logic (BTE)", "Debate Crew (ENG)", "Room 211", "-", "Le Le Khen", "Gov"),
    new Debate("Round 2", "The Nexus (BTE)", "The Infinity Achiever (BBA)", "Room 308", "-", "Nishu Rani Das", "Gov"),
    new Debate("Round 2", "Paradox (JRN)", "Ideology Warriors (JRN)", "Room D105", "-", "Jasim Qreshi", "Opp"),
    new Debate("Round 2", "Galaxy (BBA)", "Thinker Alliance (JRN)", "Room DLab3", "-", "Inkiad", "Opp"),
    new Debate("Round 3", "Mindscript (BBA)", "Think Thank (LLB)", "Room 119", "-", "-", "Opp"),
    new Debate("Round 3", "Green Apple (BBA)", "Phoenix (ENG)", "Room 117", "-", "-", "Opp"),
    new Debate("Round 3", "The Nexus (BTE)", "Undertop (LLB)", "Room 219", "-", "-", "Gov"),
    new Debate("Round 3", "Skylark (ENG)", "Purbasha (BFT)", "Room 222", "-", "-", "Gov"),
    new Debate("Round 3", "Paradox (JRN)", "NSA Gladiators (BBA)", "Room 315", "-", "-", "Opp"),
    new Debate("Round 3", "Warriors (LLB)", "Thinker Alliance (JRN)", "Room 318", "-", "-", "Gov"),
    new Debate("Round 3", "Echo Verse (BBA)", "Treble Trouble (LLB)", "Room 219", "-", "-", "Gov"),
    new Debate("Round 3", "Justice Seekers (LLB)", "The Infinity Achiever (BBA)", "Room 206", "-", "-", "-"),
    new Debate("Round 3", "Galaxy (BBA)", "Trio of Logic (BTE)", "Room 204", "-", "-", "Opp"),
    new Debate("Round 3", "JB Empire (BBA)", "The Rationalist (BTE)", "Room B204", "-", "-", "Opp"),
    new Debate("Round 3", "Debate Crew (ENG)", "The Facists (ENG)", "Room D105", "-", "-", "Opp"),
    new Debate("Round 3", "Fact Finders (JRN)", "Ideology Warriors(JRN)", "Room D302", "-", "-", "Opp"),
    new Debate("Quarter", "NSA Gladiators (BBA)", "Warriors (LLB)", "Room ", "-", "-", "Opp"),
    new Debate("Quarter", "Trio of Logic (BTE)", "Think Thank (LLB)", "Room ", "-", "-", "Gov"),
    new Debate("Quarter", "Echo Verse (BBA)", "Ideology Warriors(JRN)", "Room ", "-", "-", "Opp"),
    new Debate("Quarter", "The Facists (ENG)", "The Nexus (BTE)", "Room ", "-", "-", "Opp"),
    // new Debate("Semi-Final", "Warriors (LLB)", "Trio of Logic (BTE)", "Room ", "-", "-", "-"),
    // new Debate("Semi-Final", "Ideology Warriors(JRN)", "The Nexus (BTE)", "Room ", "-", "-", "-"),
    new Debate("Semi-Final", "Warriors", "Ideology Warriors", "Room 310", "2;15 PM", "Farhan Nasir Nirnoy", "-"),
    new Debate("Semi-Final", "Trio of Logic", "The Nexus", "Room 215", "2:15 PM", "-", "-"),
    new Debate("Final Round", "-", "-", "Room ", "-", "-", "-"),
];


const results = [
    new Result(
        "Round 1",
        "This House would ban private cars.",
        "Team Alpha",
        "Team Beta",
        "Team Alpha",
        "John Doe",

        "Round 2",
        "This House would ban private cars.",
        "Team Alpha",
        "Team Beta",
        "Team Alpha",
        "John Doe"
    )
];

// Sample news array
// Simplified news array
const newsList = [
    { title: "The Daily Star", link: "https://www.thedailystar.net/" },
    { title: "BBC", link: "https://www.bbc.com/bengali" },
    { title: "BBC News Bangla", link: "https://www.bbc.com/bengali" },
    { title: "The Bangladesh Today", link: "https://epaper.thebangladeshtoday.com/" },
    { title: "Dhaka Tribune", link: "https://www.dhakatribune.com/" },
    { title: "CNN", link: "https://edition.cnn.com/" },
    { title: "Aljazeera", link: "https://www.aljazeera.com/" },
    { title: "Prothom Alo", link: "https://www.prothomalo.com/" },
    { title: "Bangladesh Pratidin", link: "https://www.bd-pratidin.com/" },
    { title: "Daily Ittefaq", link: "https://www.ittefaq.com.bd/" },
    { title: "Daily Amardesh", link: "https://www.dailyamardesh.com/" },
    { title: "Kaler Kontho", link: "https://www.kalerkantho.com/" },
    { title: "Jugantor", link: "https://www.jugantor.com/" },
    { title: "Samakal", link: "https://samakal.com/" },
    { title: "Manobjomin", link: "https://mzamin.com/#google_vignette" },
    { title: "Kalbela", link: "https://www.kalbela.com/" },
    { title: "Jaijaidin", link: "https://www.jaijaidinbd.com/#google_vignette" },
    { title: "Amader Shomoy", link: "https://www.dainikamadershomoy.com/" },
    { title: "Jonkontho", link: "https://www.dailyjanakantha.com/" },
    { title: "Shongbad", link: "https://sangbad.net.bd/" },
    { title: "Manob Kontho", link: "https://manobkantha.com.bd/#google_vignette" },
    { title: "Daily Inqilab", link: "https://dailyinqilab.com/" },
    { title: "Ajkaler Khobor", link: "https://www.ajkalerkhobor.net/" },
    { title: "ajker Patrika", link: "https://www.ajkerpatrika.com/" },
    { title: "Protidiner Shongbad", link: "https://www.protidinersangbad.com/" },

];


// ----------------------
// PAGE SWITCHING
// ----------------------

function showPage(pageId) {
    document.querySelectorAll(".page-section").forEach(sec => sec.style.display = "none");
    document.getElementById(pageId).style.display = "block";
}

// ----------------------
// RENDER FUNCTIONS
// ----------------------

function renderTeams() {
    const table = document.getElementById("teamTableBody");
    table.innerHTML = "";

    teams.forEach((t, i) => {
        let row = `
            <tr>
                <td>${i + 1}</td>
                <td>${t.name}</td>
                ${t.r.map(v => `<td>${v}</td>`).join("")}
                <td>${t.total}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function renderSpeakers() {
    const table = document.getElementById("speakerTableBody");
    table.innerHTML = "";

    speakers.forEach((s, i) => {
        let row = `
            <tr>
                <td>${i + 1}</td>
                <td>${s.name}</td>
                ${s.r.map(v => `<td>${v}</td>`).join("")}
                <td>${s.total}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function renderAdjudicators() {
    const table = document.getElementById("adjTableBody");
    table.innerHTML = "";

    adjudicators.forEach((a, i) => {
        let row = `
            <tr>
                <td>${i + 1}</td>
                <td>${a.name}</td>
                <td>${a.designation}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function renderMotions() {
    const container = document.getElementById("motionContainer");
    container.innerHTML = "";

    motions.forEach((m, i) => {
        let card = `
            <div class="motion-card">
                <h3>${m.title}</h3>
                <textarea>${m.text}</textarea>
                <button onclick="openMotionInfo(${i})">Info</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

function renderDebates() {
    const table = document.getElementById("debateTableBody");
    table.innerHTML = "";

    debates.forEach((d) => {
        let row = `
            <tr>
                <td>${d.round}</td>  <!-- ROUND instead of serial -->
                <td>${d.gov}</td>
                <td>${d.opp}</td>
                <td>${d.venue}</td>
                <td>${d.time}</td>
                <td>${d.judge}</td>
                <td>${d.winner}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}


function renderResults() {
    const container = document.getElementById("resultContainer");
    container.innerHTML = "";

    results.forEach((r, i) => {
        let block = `
            <div class="result-block">
                <button class="toggle-btn" onclick="toggleResult(${i})">${r.round}</button>
                <div class="result-details" id="result-${i}">
                    <p><strong>Motion:</strong> ${r.motion}</p>
                    <p><strong>Gov:</strong> ${r.gov}</p>
                    <p><strong>Opp:</strong> ${r.opp}</p>
                    <p><strong>Winner:</strong> ${r.winner}</p>
                    <p><strong>Adjudicator:</strong> ${r.adjudicator}</p>
                </div>
            </div>
        `;
        container.innerHTML += block;
    });
}

// Render function
// function renderNews() {
//     const container = document.getElementById("newsContainer");
//     container.innerHTML = "";

//     newsList.forEach(news => {
//         let card = `
//             <div class="news-card">
//                 <h3>${news.title}</h3>
//                 <p>${news.date}</p>
//                 <a href="${news.link}" target="_blank">Read Online</a>
//             </div>
//         `;
//         container.innerHTML += card;
//     });
// }

// Function to get formatted date like "15 November 2025"
function getTodayDate() {
    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return today.toLocaleDateString("en-US", options);
}

function renderNews() {
    const container = document.getElementById("newsContainer");
    container.innerHTML = "";
    const todayDate = getTodayDate();

    newsList.forEach(news => {
        let card = `
            <div class="news-card">
                <h3>${news.title}</h3>
                <p><b>${todayDate}</b></p>
                <a href="${news.link}" target="_blank">Read More</a>
            </div>
        `;
        container.innerHTML += card;
    });
}


// ----------------------
// SORTING
// ----------------------

function sortTeams(order) {
    if (order === "asc") teams.sort((a, b) => a.total - b.total);
    else teams.sort((a, b) => b.total - a.total);
    renderTeams();
}

function sortSpeakers(order) {
    if (order === "asc") speakers.sort((a, b) => a.total - b.total);
    else speakers.sort((a, b) => b.total - a.total);
    renderSpeakers();
}

// ----------------------
// MODALS
// ----------------------

function openMotionInfo(i) {
    const m = motions[i];
    document.getElementById("motionModalBody").innerHTML =
        m.info ? `<p>${m.info}</p>` : "<p>No additional info available.</p>";

    document.getElementById("motionModal").style.display = "flex";
}

function closeMotionModal() {
    document.getElementById("motionModal").style.display = "none";
}

// ----------------------
// RESULT TOGGLE
// ----------------------

function toggleResult(i) {
    const div = document.getElementById(`result-${i}`);
    div.style.display = div.style.display === "block" ? "none" : "block";
}

// ----------------------
// INITIAL RENDER
// ----------------------

renderTeams();
renderSpeakers();
renderAdjudicators();
renderMotions();
renderDebates();
renderResults();
renderNews();
