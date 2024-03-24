import React, { Component, useEffect, useState } from 'react';

const BASE_URL = "http://127.0.0.1:8080"

const DEFAULT_DATA = [
  {
    "name": "Disrupt",
    "description": "Disrupt aims to inform, empower, and connect the next generation of students interested in the growing space of Finance Technology (FinTech).",
    "num_members": 520,
    "recruitment_cycle": "Fall",
    "recruitment_type": "via Application"
  },
  {
    "name": "Entrepreneurs Club",
    "description": "The NU Entrepreneurs Club is Northeastern University's largest student organization. Our 1000+ members come from a diverse set of backgrounds to attend our 4 programs, including workshops, community initiatives, an executive speaker series, and a startup incubator. Our community is now global and you can get involved in Northeastern Oakland and London campus! ",
    "num_members": 98,
    "recruitment_cycle": "Fall & Spring",
    "recruitment_type": "Unrestricted"
  },
  {
    "name": "International Students in Business",
    "description": "Vision: ISIB hopes to be a resource in a club form that offers to primarily assist international students integrate in the US workforce and become global business leaders.\nOne major setback that international students face when coming to study in the US, is the uncertainty of having viable job prospects in the US after graduation due to the Visa/Work Permit issue. Currently, US college graduates without a STEM major get 12 months of OPT and STEM students a total of 29 months. After this period, students must hope that companies will sponsor them for an H-1B visa, which very few companies do and these companies are also difficult to find.\nAdditionally, the club also hopes to offer guidance to international student on how to be successful as internationals in the professional world, and how they should be able to utilize their skills to their advantage.\n\nStrategy: We hope to have our club consist of two components. The first component would be to have a research division to the club. The researchers would have the responsibility of researching &amp; contacting companies for positions that offer sponsorship or offer to hire international students. In the long run we would hopefully be able to build relationships with these companies where we can hopefully send an international student every year to work there. The findings of our research will be available to all our members and we would also encourage members to have a genuine crowdsourcing mentality, where if they find a position that does not require sponsorship, that they share it with the rest of the group members.\nAlternatively, we would also like to bring in guest speakers, in a group discussion setting, to give members the opportunity to talk and discuss on how to be successful international professionals. Researchers and Eboard members in our club would also be responsible for reach out to potential guest speakers.\n\nObjectives: The three objectives we have are Place &amp; Educate &amp; Serve. We want to place as much of our international members into secure jobs after graduation. We want to educate the international student body on how they are able to be global leaders by bringing in proven professionals in an array of fields to offer advice and guidance. Lastly, it is also important to serve. This is done by researchers in the club and general members sharing jobs that they have found that do not require sponsorships to all other members of the club. We would highly encourage researchers to be non-international students that want to ensure that their peers have as many opportunity possibilities as possible after graduation.\n ",
    "num_members": 51,
    "recruitment_cycle": "Spring",
    "recruitment_type": "via Application"
  },
  {
    "name": "Multi-diverse Unified Leaders in Technology Industry",
    "description": "MULTI aims to promote diversity and inclusion in the technology field, and to uplift and empower students from all backgrounds pursuing a career in the industry. MULTI fosters an inclusive learning community by hosting a variety of events, including group discussions, career talks, and workshops. MULTI also provides a platform for discussing student affairs and engaging with Khoury&rsquo;s diversity and inclusion initiatives.",
    "num_members": 495,
    "recruitment_cycle": "Fall",
    "recruitment_type": "Unrestricted"
  },
  {
    "name": "Out in Business",
    "description": "Out in Business is a organization whose purpose is to create and maintain an inviting space for LGBTQ+ students of Northeastern University interested in the business field to organize, socialize, and form connections with one another, all the while cultivating and promoting the personal and professional growth of its members through the study of business and its applications in the world. ",
    "num_members": 370,
    "recruitment_cycle": "Spring",
    "recruitment_type": "via Application"
  },
  {
    "name": "Spark",
    "description": "spark is a unique organization that is dedicated to sharing art with the greater community. We seek to expose students to the artistic world of Boston by hosting exhibitions featuring student-made artwork, museum tours, artist talks, and other events. Our club is composed of people who are passionate about art and are seeking real-world experience in marketing, budgeting, exhibition management, design, and other fields of art appreciation. We welcome students from all majors and skill levels!\nSpark is made up of an eboard containing roles that fall under: Exhibitions, Events, Finance, and Media. We typically assign roles based on quick applications and interviews that consider members' preferences and skills. All are welcome at our meetings, and please reach out by email or socials with any questions.  ",
    "num_members": 655,
    "recruitment_cycle": "Always",
    "recruitment_type": "via Application"
  },
  {
    "name": "Sports Business & Innovation Network",
    "description": "Sports Business &amp; Innovation Network strives to:\n- Educate the future leaders of our community\n- Connect with the industry professionals\n- Innovate towards the future of sports\n- Empower our peers to pursue opportunities\nJoin our mailing list to learn about opportunities within the club! https://tr.ee/MzsoaurA0k",
    "num_members": 770,
    "recruitment_cycle": "Spring",
    "recruitment_type": "Unrestricted"
  },
  {
    "name": "TAMID Group at Northeastern University",
    "description": "TAMID is a national organization that prepares students to work with startups and exposes them to disciplines such as entrepreneurship, consulting, and finance through the lens of the Israeli startup ecosystem. This is done through our pro bono consulting program where we consult for top startups coming out of Tel-Aviv and a national stock pitch competition to decide which companies to add to our stock portfolio. We also provide an exclusive summer internship program in Israel.\nFill out our interest form here to receive updates on the Spring 2024 recruitment process!",
    "num_members": 562,
    "recruitment_cycle": "Fall",
    "recruitment_type": "via Application"
  },
  {
    "name": "The Sustainable Innovation Network",
    "description": "Our mission is to foster collaboration across disciplines for undergraduates passionate about social innovation. Through our framework of \"entrepreneurship is for everyone\", we aim to recognize social injustices, find helpful solutions, and build with the intention of having lasting, but profitable, impact. ",
    "num_members": 1,
    "recruitment_cycle": "Always",
    "recruitment_type": "via Application"
  },
  {
    "name": "Women's Interdisciplinary Society of Entrepreneurship",
    "description": "The Women&rsquo;s Interdisciplinary Society of Entrepreneurship (WISE) is a student-led group at Northeastern University dedicated to helping women develop an innovative mindset through interactive workshops (WeLearn), a thought-incubator (WeBuild), and mentorship pairings (WeSupport).\nWISE provides students the opportunity to explore curiosities and discover paths together. Experiential learning is at the heart of Northeastern University, and WISE builds upon its ethos.\nWhether you are looking to attend interactive workshops that showcase entrepreneurship in every light, find a mentor to help develop personal and professional skills, or strengthen problem-solving skills through working on a semester-long project, WISE has an opportunity for you!\nIf your interested and want to learn more, sign up for our newsletter here!\nAlso, follow us on instagram @northeasternwise",
    "num_members": 91,
    "recruitment_cycle": "Spring",
    "recruitment_type": "Unrestricted"
  }
]

type SearchResult = Club

interface Club {
  name: string,
  description: string,
  num_members: number,
  recruitment_cycle: string,
  recruitment_type: string,
}

export default function SearchDemo() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    console.log(search)
  })

  return (
    <div className="main">
      <div className="search-box">
        <input
          className="search-input"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='What would you like to find?'/>  
        <button
          className="search-submit-btn"
          onClick={e => {
            setLoading(true)

            const params = new URLSearchParams({
              search: search
            })

            const url = `${BASE_URL}/api/v1/clubs/?${params.toString()}`
            fetch(url).then((response) => {
              setLoading(false)
              response.json().then((results: SearchResult[]) => {
                let newResults: SearchResult[] = []
                results.forEach((result, index, array) => {
                  let club = result
                  let recruitment_cycle = ""
                  switch (club.recruitment_cycle) {
                    case "always":
                      recruitment_cycle = "Always";
                      break;
                    case "fall":
                      recruitment_cycle = "Fall";
                      break;
                    case "spring":
                      recruitment_cycle = "Spring";
                      break;
                    case "fallSpring":
                      recruitment_cycle = "Fall & Spring"
                      break;
                    default:
                      break;
                  }

                  let recruitment_type = ""
                  switch (club.recruitment_type) {
                    case "application":
                      recruitment_type = "via Application";
                      break;
                    case "unrestricted":
                      recruitment_type = "Unrestricted";
                      break;
                    case "tryout":
                      recruitment_type = "via Tryout";
                      break;
                    default:
                      break;
                  }

                  newResults.push({
                    
                      name: club.name,
                      description: club.description,
                      num_members: club.num_members,
                      recruitment_cycle: recruitment_cycle,
                      recruitment_type: recruitment_type
                    })
                })
                console.log(newResults)
                setResults(newResults)
              })
            })
          }}><p className="search-submit-btn-txt">Submit</p></button>
          {loading == true && <p>Loading...</p>}
        </div>
        <ul>
        {results.map((value, index, array) => {
          return SearchResultDisplay(value)
        })}
        </ul>
    </div>  
  );
}

function SearchResultDisplay(x: SearchResult) {
  return (
    <li className="srd">
      <div className="srd-header">
        <h3>{x.name}</h3>
      </div>
      <div className="srd-paragraph">
        <p>{x.description}</p>
      </div>
      <div className="srd-points">
        <div className="srd-point">
          <p><span className="bold-txt"># of members: </span>{x.num_members}</p>
        </div>
        <div className="srd-point">
          <p><span className="bold-txt">Recruitment cycle: </span>{x.recruitment_cycle}</p>
        </div>
        <div className="srd-point">
          <p><span className="bold-txt">Recruitment type: </span>{x.recruitment_type}</p>
        </div>
      </div>
    </li>
  )
}