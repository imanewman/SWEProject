const expect = require("chai").expect;
const Rec = require("../src/js/Model/Rec");
class PrivateHelper {

    constructor() {
        if(! PrivateHelper.instance){
            PrivateHelper.instance = this;
        }

        return PrivateHelper.instance;
    }

    IterateFields(result, expected){
      expect(result.length).to.equal(expected.length); // check that result is one row

      for (var idx = 0; idx < result.length; idx++) {
          let resultRow = result[idx];
          let expectedRow = expected[idx];

          Object.keys(expectedRow).forEach( (key) => {
              expect(resultRow[key]).to.equal(expectedRow[key]); // check each value matches
          });
      }
    }

    getRecdata()
    {
      return {
          "RecID": 2,
          "EventName": "Downtown SLO Farmers Market",
          "Description": "Description",
          "Location": "Higuera Street, San Luis Obispo, CA",
          "Date": "2019-02-21",
          "StartTime": "18:00:00",
          "EndTime": "21:00:00",
          "MajorTag": ['Farmers Market'],
          "Draft": false,
          "ContactInfo": "Contact Info",
          "WebsiteLink": "https://downtownslo.com/farmers-market/",
          "ImgLink": "ImageLink stuff",
          "Rules": "Rules",
          "UserID": 1
      };
    }

    getUserdata()
    {
      return {
          "id": 3,
          "email": "Junk",
          "fullName": "Name",
          "passwordHash": "password1",
          "preferredEvents": ['Event1', 'Event2']
      };
    }

  getRecListData()
  {
    let testRecs = [
      new Rec(
        "1",
        "Downtown SLO Farmers Market",
        "The Downtown SLO Farmers’ Market is undoubtedly one of the most treasured events on the Central Coast and has a long history of bringing locals and visitors together to eat, shop, listen to music and connect with their community.\nThe Market takes place every Thursday evening from 6:00 PM to 9:00 PM (weather permitting and excluding major holidays) on Higuera Street between Nipomo and Osos streets.",
        "Higuera Street, San Luis Obispo, CA",
        "2019-02-21",
        "18:00:00",
        "21:00:00",
        ['Farmers Market'],
        false,
        "For more information about Downtown SLO Farmers’ Market please contact our Market Manager at (805) 541-0286 ext. 2 or farmers@DowntownSLO.com",
        "https://downtownslo.com/farmers-market/",
        'https://downtownslo.com/wp-content/uploads/2019/02/2.21.19-821x1024.jpg',
        "California Health & Safety Code 114259.5 stipulates that live animals aren’t allowed in certified farmers markets (such as ours) and permitted food facilities, with the exception of service animals. Fraudulently misrepresenting service animals is a misdemeanor (California Penal Code 365.7 [a]). Please, leave your pets at home to keep our Market clean and safe for all guests.",
        "1",
        {}
      ),
      new Rec(
        "2",
        "When Social Media Companies, Research Ethics, and Human Rights Collide",
        "As social media and other tech companies face serious ethical criticism—about privacy, algorithmic bias, emotional manipulation, and other concerns—this talk offers a new “human data research” paradigm for technology’s next wave of social worlds.  Most of these “ethical dilemmas” arise not because bad-intentioned actors, but because methods of investigation and innovation are pushed to capacity and failing us.  For instance, traditional principles of human subject research aren’t suited for online environments today, which are at once familiar software (like a spreadsheet), but also controlled settings (like a lab) and deeply social and dynamic (like a backyard BBQ).  The path forward isn’t in listing an abstract set of principles but hammering out a new, shared course of action that seeks to respect the rights/freedoms of individuals and society in these new online environments.  Researchers and industry need to earn the public’s trust in order to protect their own future.",
        "Performing Arts Center, 1 Grand Ave, San Luis Obispo, CA",
        "2019-02-19",
        "11:00:00",
        "13:00:00",
        ['Speech'],
        false,
        "For more information, contact Professor Patrick Lin, Philosophy Department: palin@calpoly.edu",
        "https://www.microsoft.com/en-us/research/people/mlg/",
        'https://www.pacslo.org/ArticleMedia/Images/PAC/Site/PAC_SLO_logo.jpg',
        "None Specified",
        "1",
        {}
    ),
    new Rec(
        "3",
        "Uncork The Mic (Unconventional Open Mic Sesh)",
        "Indie singer-songwriter and multi-instrumentalist Cassi Nicholls combines compelling melodies, potent lyrics, and kaleidoscopic emotions to sculpt her tracks into what listeners experience as living, heart-stirring memoirs.  (She has captivated the crowd at two of my events, and I know from her stage presence and songwriting ability, she has the potential to rise to the top...M). Join us on Wednesday February 20th at one of the hottest SLO venues for live music.  During this event the venue becomes a listening room for the singer/songwriters, and we thank you ahead of time for your kindness by giving each artist your full attention. ",
        "181 Tank Farm Rd Ste. 110, San Luis Obispo, CA 93401",
        "2019-02-20",
        "19:00:00",
        "21:00:00",
        ['Open Mic'],
        false,
        "To learn more about her journey, upcoming shows, and debut EP release, you may as follow Cassi Nicholls on Facebook (@CassiNMusic) and Instagram (@thegirlmusic). (bio by Ivy Cayden)",
        "https://www.7sistersbrewing.com/events-page",
        'https://static1.squarespace.com/static/595591b09f7456c3e0135686/59df60232994caa6a873399c/5c5eee8853450a883a16d178/1549725383822/cassi+nichols.jpg',
        "None Specified",
        "2",
        {}
    ),
    new Rec(
        "4",
        "Cal Poly Men's Basketball vs UC Irvine",
        "Cal Poly Men's Basketball playing against UC Irvine at UC Irvine.",
        "University of California Irvine, Irvine, CA",
        "2019-02-21",
        "19:00:00",
        "22:00:00",
        ['Sports'],
        false,
        "None Specified",
        "https://www.gopoly.com/sports/mbkb/2018-19/schedule#",
        "https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/team-logos/ncaa/CPOLY.svg",
        "None Specified",
        "2",
        {}
    ),
    new Rec(
        "5",
        "YCEUM: Mental Health Awards & Education Luncheon",
        "The Lyceum is an Annual Mental Health Awards & Education Luncheon, held on National Mental Health Day. The Lyceum awards & education luncheon honors a local leader in mental health, an aspiring associate-trainee level therapist, and features a keynote address from an innovative voice in the field of Psychology. Lyceum offers continuing education credits for mental health professionals, non-profit/social service sector networking, and awareness of Community Counseling Center's (CCC) leadership and unique history on the Central Coast. All proceeds benefit Community Counseling Center (CCC) Training & Education Programs.",
        "Ventana Grill, 2575 Price Street, Pismo Beach, CA",
        "2019-03-01",
        "12:00:00",
        "13:30:00",
        ['Charity'],
        false,
        "None Specified",
        "https://www.eventbrite.com/e/lyceum-mental-health-awards-education-luncheon-tickets-55295189400?aff=ebdssbdestsearch",
        "https://storage.googleapis.com/cccslo-org/uploads/lyceum2.png",
        "Tickets: $50.00",
        "2",
        {}
    )
    ];
    return testRecs;
  }
}

const Helper = new PrivateHelper();

Object.freeze(Helper);

module.exports = Helper;
