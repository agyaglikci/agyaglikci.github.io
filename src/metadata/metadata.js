module.exports = {
  name: 'Abdullah Giray Yağlıkçı',
  title: 'Research Assistant at ETH Zurich',
  facts: {
    // 'Residence': '<a href="https://www.google.com/maps/place/London,+UK/@51.5285582,-0.2416814,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862"><i class="fa fa-home fact-icon"></i>London</a>',
    // 'Wiki': `<a href="https://en.wikipedia.org/wiki/William_Shakespeare">
    //               <i class="fa-brands fa-wikipedia-w fact-icon"></i>William_Shakespeare
    //             </a>`,

    'Reach me': `<a href="https://dblp.org/pid/147/4019.html"><i class="fa fa-graduation-cap fact-icon" aria-hidden="true"></i></a>
    <a href="https://www.github.com/agyaglikci"><i class="fa-brands fa-github fact-icon"></i></a>
    <a href="https://www.youtube.com/channel/UCPqbz23zyVRXRFv-vtNyZGw"><i class="fa-brands fa-youtube fact-icon"></i></a>
    <a href="https://www.linkedin.com/in/agyaglikci/"><i class="fa-brands fa-linkedin fact-icon"></i></a>
    <a href="https://twitter.com/agyaglikci"><i class="fa-brands fa-twitter fact-icon"></i></a>`,
    '': '<a href="mailto:giray.yaglikci@safari.ethz.ch"><i class="fa fa-envelope fact-icon"></i>giray.yaglikci@safari.ethz.ch</a>',
    
  },
  skills: [
    // ['Comedy', 100],
    // ['Love', 100],
    // ['Theater', 100],
    // ['Tragedy', 100],
    // ['Poetry', 100],
    // ['Erotic', 75],
    // ['Sonnets', 100],
    // ['Plays', 100],
    // ['Writing', 100],
    // ['Directing', 75],
    // ['Literature', 100],
    // ['Influence', 100],
  ],
  educations: [
    {school: 'ETH Zürich', degree: 'PhD in Information Tech. and Electrical Engineering', period: '2023 (expected)'},
    {school: 'University of Notre Dame Du Lac (ND)', degree: 'MSc in Computer Science', period: '2016'},
    {school: 'TOBB University of Economics and Technology', degree: 'MSc in Computer Engineering', period: '2014'},
    {school: 'TOBB University of Economics and Technology', degree: 'BSc in Electrical Engineering', period: '2011'},
    // {school: 'Eskisehir Fatih Science High School', degree: '', period: '2006'},
  ],
  positions: [
    {
      period: 'Feb 2018 - Present',
      title: 'Research and Teaching Assistant',
      organization: 'ETH Zürich',
      skills: ['tragedy', 'death', 'love'],
      contents: ``
    },
    {
      period: 'Aug 2017 - Feb 2018',
      title: 'Research Intern',
      organization: 'Intel Labs Santa Clara             ',
      skills: ['tragedy', 'death', 'love'],
      contents: ``
    },
    {
      period: 'Aug 2016 - Aug 2017',
      title: 'Research Intern',
      organization: 'Carnegie Mellon University (CMU)',
      skills: ['tragedy', 'death', 'love'],
      contents: ``
    },
    {
      period: 'Aug 2014 - Aug 2016',
      title: 'Research Assistant',
      organization: 'University of Notre Dame Du Lac (ND)',
      skills: ['tragedy', 'death', 'love'],
      contents: ``
    },
    {
      period: 'Jan 2012 - Aug 2014',
      title: 'Research and Teaching Assistant',
      organization: 'TOBB University of Economics and Technology (TOBB ETÜ)',
      skills: ['tragedy', 'death', 'love'],
      contents: ``
    },
    {
      period: 'May 2011 - Dec 2011',
      title: 'Electrical Design Engineer',
      organization: 'Kasirga Information Systems',
      skills: ['tragedy', 'death', 'love'],
      contents: ``
    },
    {
      period: 'May 2010 - Apr 2011',
      title: 'Electrical Design Engineer',
      organization: 'Yumruk Space and Defense Industry',
      skills: ['tragedy', 'death', 'love'],
      contents: ``
    },

  ],
  ownpapers: [
    {
      title: 'HiRA: Hidden Row Activation for Reducing Refresh Latency of Off-the-Shelf DRAM Chips',
      venue: 'MICRO 2022',
      citation: `<u>A. Giray Yaglıkcı</u>, Ataberk Olgun, Minesh Patel, Haocong Luo, Hasan Hassan, Lois Orosa, Oguz Ergin, and Onur Mutlu,
      "HiRA: Hidden Row Activation for Reducing Refresh Latency of Off-the-Shelf DRAM Chips"
      Proceedings of the 55th International Symposium on Microarchitecture (MICRO), Chicago, IL, USA, October 2022.`,
      keywords: ['rowhammer', 'defense', 'refresh', 'memory', 'dram', 'memory controller', 'subarray', 'parallelism'],
      awards: [],
      summary:`
      We propose a new operation, Hidden Row Activation (HiRA), and the HiRA Memory Controller (HiRA-MC) to
      perform HiRA operations.
      HiRA hides a refresh operation's latency by refreshing a
      row concurrently with accessing or refreshing another row
      within the same bank. Unlike prior works, HiRA achieves this
      parallelism without any modifications to off-the-shelf DRAM
      chips. To do so, it leverages the new observation that two
      rows in the same bank can be activated without data loss if the
      rows are connected to different charge restoration circuitry. 

      HiRA reduces the time spent on refresh operations by 51.4%. 
      HiRA-MC increases system performance by 12.6% and 3.73× as it reduces the performance degradation due to periodic refreshes 
      and refreshes for RowHammer protection (preventive refreshes), respectively, for future DRAM chips with increased density and 
      RowHammer vulnerability.
      `,
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://arxiv.org/pdf/2209.10198.pdf'}
          ]
        },
        {
          text:'Live Talk Slides',
          urls: [
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/hira_micro22-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/hira_micro22-talk.pdf'}
          ]
        },
        {
          text:'Lecture (36 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=HTo3bVFSTjw'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/hira_lecture-slides.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/hira_lecture-slides.pdf'}
          ]
        }
      ]
    },
    {
      title: 'Understanding RowHammer Under Reduced Wordline Voltage',
      venue: 'DSN 2022',
      citation: `<u>A. Giray Yağlıkçı</u>, Haocong Luo, Geraldo F. de Oliveira, Ataberk Olgun, Minesh Patel, Jisung Park, Hasan Hassan, Jeremie S. Kim, Lois Orosa, and Onur Mutlu,
      <b>"Understanding RowHammer Under Reduced Wordline Voltage: An Experimental Study Using Real DRAM Devices"</b>
      Proceedings of the 52nd Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Baltimore, MD, USA, June 2022.`,
      keywords: ['rowhammer', 'characterization', 'real chips', 'memory', 'dram', 'voltage', 'wordline'],
      awards: [],
      summary:`
      This is the first work to experimentally demonstrate on 272
      real DRAM chips that lowering VPP reduces a DRAM chip's
      RowHammer vulnerability. We show that lowering VPP 1) increases the number of activate-precharge cycles needed to induce a RowHammer bit flip by up to 85.8 % with an average of
      7.4 % across all tested chips and 2) decreases the RowHammer
      bit error rate by up to 66.9 % with an average of 15.2 % across
      all tested chips. At the same time, reducing VPP marginally
      worsens a DRAM cell's access latency, charge restoration, and
      data retention time within the guardbands of system-level nominal timing parameters for 208 out of 272 tested chips. We
      conclude that reducing VPP is a promising strategy for reducing
      a DRAM chip's RowHammer vulnerability without requiring
      modifications to DRAM chips.      
      `,
      sources: [
        {text: 'Full Paper', urls: [{type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22.pdf'}]},
        {text: 'arXiv', urls: [{type: 'file-pdf', url:'https://arxiv.org/pdf/2206.09999.pdf'}]},
        {text: 'Lightning Talk (2 mins)', urls: [
          {type: 'play', url:'https://www.youtube.com/watch?v=_njHx34GgXo'},
          {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-lightning-talk.pdf'},
          {type: 'file-powerpoint', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-lightning-talk.pptx'},
        ]},
        {text: 'Full Talk (34 mins incl. Q&A)', urls: [
          {type: 'play', url:'https://www.youtube.com/watch?v=CJoBROgFbwc'},
          {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-talk.pdf'},
          {type: 'file-powerpoint', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-talk.pptx'},
        ]},
      ]
    },
    {
      title: 'A Deeper Look into RowHammer',
      venue: 'MICRO 2021',
      citation: 'Lois Orosa, <u>Abdullah Giray Yağlıkçı</u>, Haocong Luo, Ataberk Olgun, Jisung Park, Hasan Hassan, Minesh Patel, Jeremie S. Kim, and Onur Mutlu, <b>"A Deeper Look into RowHammer’s Sensitivities: Experimental Analysis of Real DRAM Chips and Implications on Future Attacks and Defenses"</b> Proceedings of the 54th International Symposium on Microarchitecture (MICRO), Virtual, October 2021.',
      keywords: ['rowhammer', 'characterization', 'real chips', 'memory', 'dram', 'temperature', 'access pattern', 'spatial variation'],
      awards: [],
      summary:`
        We present an experimental characterization using 248 DDR4
        and 24 DDR3 modern DRAM chips from four major DRAM manufacturers demonstrating how the RowHammer effects vary with
        three fundamental properties: 1) DRAM chip temperature, 2) aggressor row active time, and 3) victim DRAM cell's physical location.
        Among our 16 new observations, we highlight that a RowHammer
        bit flip 1) is very likely to occur in a bounded range, specific to each
        DRAM cell (e.g., 5.4% of the vulnerable DRAM cells exhibit errors
        in the range 70 °C to 90 °C), 2) is more likely to occur if the aggressor row is active for longer time (e.g., RowHammer vulnerability
        increases by 36% if we keep a DRAM row active for 15 column
        accesses), and 3) is more likely to occur in certain physical regions
        of the DRAM module under attack (e.g., 5% of the rows are 2x more
        vulnerable than the remaining 95% of the rows). Our study has
        important practical implications on future RowHammer attacks
        and defenses. We describe and analyze the implications of our new
        findings by proposing three future RowHammer attack and six
        future RowHammer defense improvements.
      `,
      sources: [
        {text: 'Full Paper', urls: [{type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21.pdf'}]},
        {text: 'arXiv', urls: [{type: 'file-pdf', url:'https://arxiv.org/abs/2110.10291'}]},
        {text: 'Lightning Talk (1.5 mins)', urls: [
          {type: 'play', url:'https://www.youtube.com/watch?v=slFNdmPVD-Q&list=PL5Q2soXY2Zi--0LrXSQ9sST3N0k0bXp51&index=6'},
          {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-lightning-talk.pdf'},
          {type: 'file-powerpoint', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-lightning-talk.pptx'},
        ]},
        {text: 'Full Talk (21 mins)', urls: [
          {type: 'play', url:'https://www.youtube.com/watch?v=fkM32oA0u6U&list=PL5Q2soXY2Zi--0LrXSQ9sST3N0k0bXp51&index=12'},
          {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-talk.pdf'},
          {type: 'file-powerpoint', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-talk.pptx'},
        ]},
      ]
    },
    {
      title: 'BlockHammer: Preventing RowHammer at Low Cost by Blacklisting Rapidly-Accessed DRAM Rows',
      venue: 'HPCA 2021',
      citation: '<u>A. Giray Yağlıkçı</u>, Minesh Patel, Jeremie S. Kim, Roknoddin Azizi, Ataberk Olgun, Lois Orosa, Hasan Hassan, Jisung Park, Konstantinos Kanellopoulos, Taha Shahroodi, Saugata Ghose, and Onur Mutlu, <b>"BlockHammer: Preventing RowHammer at Low Cost by Blacklisting Rapidly-Accessed DRAM Rows,"</b> in Proceedings of the 27th International Symposium on High-Performance Computer Architecture (HPCA), Virtual, February-March 2021.',
      keywords: ['rowhammer', 'defense', 'throttling', 'memory', 'dram', 'memory controller', 'hardware'],
      awards: [
        {name: "Intel Hardware Security Academic Award Finalist (one of 4 finalists out of 34 nominations)"}
      ],
      summary:`
        In this paper, we show that it is possible to efficiently and scalably prevent RowHammer bitflips 
        without knowledge of or modification to DRAM internals. We introduce BlockHammer, 
        a low-cost, effective, and easy-to-adopt RowHammer mitigation mechanism that prevents all RowHammer 
        bitflips while overcoming the two key challenges: scalability with worsening RowHammer vulnerability 
        and compatibility with commodity DRAM chips. BlockHammer selectively throttles memory accesses that 
        may cause RowHammer bitflips. To our knowledge, this is the first work that prevents RowHammer 
        bitflips efficiently and scalably without knowledge of or modifications to DRAM internals.
      `,
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/BlockHammer_preventing-DRAM-rowhammer-at-low-cost_hpca21.pdf'}
          ]
        },
        {
          text:'Short Talk (7 mins)',
          urls: [
            {type: 'play', url:'https://youtu.be/40SXSKXW5kY'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-short-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-short-talk.pdf'}
          ]
        },
        {
          text:'Full Talk (22 mins)',
          urls: [
            {type: 'play', url:'https://youtu.be/cWbW4qoDFds'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-talk.pdf'}
          ]
        },
        {
          text:'Intel HWSec Academic Awards Talk (2 mins)',
          urls: [
            {type:'play', url:'https://www.youtube.com/watch?v=5TymwquygZM'},
            {type:'file-powerpoint', url:'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-IntelHardwareSecurityAcademicAwards-short-talk.pptx'},
            {type:'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-IntelHardwareSecurityAcademicAwards-short-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: 'Security Analysis of the Silver Bullet Technique for RowHammer Prevention',
      venue: 'arXiv 2021',
      citation: '<u>A. Giray Yağlıkçı</u>, Jeremie S. Kim, Fabrice Devaux, and Onur Mutlu, <b>""Security Analysis of the Silver Bullet Technique for RowHammer Prevention","</b> arXiv, 2021.',
      keywords: ['rowhammer', 'defense', 'refresh', 'memory', 'dram', 'on-die', 'hardware'],
      awards: [],
      summary:`
      We mathematically demonstrate that Silver Bullet, when properly configured and implemented in a DRAM chip, can securely prevent RowHammer attacks. The demonstration focuses on the most representative implementation of Silver Bullet, the patent claiming many implementation possibilities not covered in this demonstration. Our study concludes that Silver Bullet is a promising RowHammer prevention mechanism that can be configured to operate securely against RowHammer attacks at various efficiency-area tradeoff points, supporting relatively small hammer count values (e.g., 1000) and Silver Bullet table sizes (e.g., 1.06KB).
      `,
      sources:[ 
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://arxiv.org/abs/2106.07084.pdf'}
          ]
        },
      ]
    }
  ],
  talks:[
    {
      title: "Fundamentally Understanding and Solving RowHammer",
      length: "26 mins",
      venue: "ASP-DAC 2023",
      venuelong: "Asia and South Pacific Design Automation Conference",
      video: '1kpDJkh_I8s',
      ppt: 'https://people.inf.ethz.ch/omutlu/pub/rowhammer_aspdac23-talk.pptx',
      pdf: 'https://people.inf.ethz.ch/omutlu/pub/rowhammer_aspdac23-talk.pdf'
    },
    {
      title: "Fundamentally Understanding and Solving RowHammer",
      length: "20 mins",
      venue: "AMLD 2022",
      venuelong: "Applied Machine Learning Days",
      video: 'af2akuPkYHo',
      ppt: 'http://n.ethz.ch/~yaglikca/talks/onur-RowHammer-MicrosoftSwissJRC-KickoffMeeting-March-29-2022.pptx',
      pdf: 'http://n.ethz.ch/~yaglikca/talks/onur-RowHammer-MicrosoftSwissJRC-KickoffMeeting-March-29-2022.pdf'
    }
  ],
  services:[
    {
      role: "Student Assistant to PC chairs",
      venue: "DSN",
      year: "2023"
    },
    {
      role: "Reviewer",
      venue: "DSN",
      year: "2023" 
    },
    {
      role: "Reviewer",
      venue: "ACM TODAES",
      year: "2022" 
    }
  ],
  otherpapers: [
    {
      title: "RowHammer Survey",
      venue: "ASP-DAC, 2023",
      citation: `Onur Mutlu, Ataberk Olgun, and <u>A. Giray Yağlıkçı</u>,
      <b>"Fundamentally Understanding and Solving RowHammer"</b>
      Invited Special Session Paper at the 28th Asia and South Pacific Design Automation Conference (ASP-DAC), Tokyo, Japan, January 2023.`,
      keywords: ['rowhammer', 'survey', 'position', 'characterization', 'dram', 'mitigation', 'attack'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://arxiv.org/pdf/2211.07613.pdf'}                    
          ]
        },
        {
          text:'Recorded Talk (26 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=1kpDJkh_I8s'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/rowhammer_aspdac23-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/rowhammer_aspdac23-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "DR-StRaNGe",
      venue: "HPCA, 2022",
      citation: `F. Nisa Bostanci, Ataberk Olgun, Lois Orosa, <u>A. Giray Yağlıkçı</u>, Jeremie S. Kim, Hasan Hassan, Oguz Ergin, and Onur Mutlu,
<b>"DR-STRaNGe: End-to-End System Design for DRAM-based True Random Number Generators"</b>
Proceedings of the 28th International Symposium on High-Performance Computer Architecture (HPCA), Virtual, April 2022.`,
      keywords: ['end-to-end', 'random numbers', 'security', 'memory', 'dram', 'memory controller'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/DR_STRANGE_EndtoEnd-DRAM-TRNG_hpca22.pdf'}                    
          ]
        },
        {
          text:'Full Talk (24 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=mSJ7GLrCu1o'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/DR_STRANGE_EndtoEnd-DRAM-TRNG_hpca22-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/DR_STRANGE_EndtoEnd-DRAM-TRNG_hpca22-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "DarkGates",
      venue: "HPCA, 2022",
      citation: `Jawad Haj Yahya, Jeremie S. Kim, <u>A. Giray Yağlıkçı</u>, Jisung Park, Efraim Rotem, Yanos Sazeides, and Onur Mutlu,
<b>"DarkGates: A Hybrid Power-Gating Architecture to Mitigate the Performance Impact of Dark-Silicon in High Performance Processors"</b>
Proceedings of the 28th International Symposium on High-Performance Computer Architecture (HPCA), Virtual, April 2022. `,
      keywords: ['power gating', 'package', 'power delivery', 'energy efficiency', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/DarkGates_hpca22.pdf'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            // {type: 'play', url:''},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/DarkGates_hpca22-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/DarkGates_hpca22-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "QUAC-TRNG",
      venue: "ISCA, 2021",
      citation: `Ataberk Olgun, Minesh Patel, <u>A. Giray Yağlıkçı</u>, Haocong Luo, Jeremie S. Kim, F. Nisa Bostanci, Nandita Vijaykumar, Oguz Ergin, and Onur Mutlu,
<b>"QUAC-TRNG: High-Throughput True Random Number Generation Using Quadruple Row Activation in Commodity DRAM Chips"</b>
Proceedings of the 48th International Symposium on Computer Architecture (ISCA), Virtual, June 2021. `,
      keywords: ['random numbers', 'characterization', 'real chips', 'memory', 'dram'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21.pdf'}                    
          ]
        },
        {
          text:'Full Talk (25 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=QtBrq0WVOmQ&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=132'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21-talk.pdf'}
          ]
        },
        {
          text:'SAFARI Live Seminar (1hr 26 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=snvF3g3GfkI&list=PL5Q2soXY2Zi_tOTAYm--dYByNPL7JhwR9&index=6'},
            // {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21-talk.pptx'},
            // {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "IChannels",
      venue: "ISCA 2021",
      citation: `Jawad Haj-Yahya, Jeremie S. Kim, <u>A. Giray Yağlıkçı</u>, Ivan Puddu, Lois Orosa, Juan Gomez Luna, Mohammed Alser, and Onur Mutlu,
      <b>"IChannels: Exploiting Current Management Mechanisms to Create Covert Channels in Modern Processors"</b>
      Proceedings of the 48th International Symposium on Computer Architecture (ISCA), Virtual, June 2021. `,
      keywords: ['security', 'covert channels', 'power delivery'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/IChannels-covert-channels_isca21.pdf'}                    
          ]
        },
        {
          text:'Full Talk (21 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=Why4Ffn5bRY&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=134'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/IChannels-covert-channels_isca21-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/IChannels-covert-channels_isca21-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "Revisiting RowHammer",
      venue: "ISCA, 2020",
      citation: 'Jeremie S. Kim, Minesh Patel, <u>A. Giray Yağlıkçı</u>, Hasan Hassan, Roknoddin Azizi, Lois Orosa, and Onur Mutlu, <b>"Revisiting RowHammer: An Experimental Analysis of Modern Devices and Mitigation Techniques,"</b> in Proceedings of the 47th International Symposium on Computer Architecture (ISCA), Valencia, Spain, June 2020.',
      keywords: ['rowhammer', 'characterization', 'real chips', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20.pdf'}                    
          ]
        },
        {
          text:'Full Talk (20 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=hU88UeWE48A&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=104'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20-talk.pdf'}
          ]
        },
        {
          text:'Lecture (55 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=gR7XR-Eepcg'},
            {type: 'file-powerpoint', url: 'https://safari.ethz.ch/architecture/fall2020/lib/exe/fetch.php?media=onur-comparch-fall2020-lecture5b-rowhammerin2020-revisitingrowhammer-afterlecture.pptx'},
            {type: 'file-pdf', url: 'https://safari.ethz.ch/architecture/fall2020/lib/exe/fetch.php?media=onur-comparch-fall2020-lecture5b-rowhammerin2020-revisitingrowhammer-afterlecture.pdf'}
          ]
        },
      ]
    },
    {
      title: "CLR-DRAM",
      venue: "ISCA, 2020",
      citation: 'Haocong Luo, Taha Shahroodi, Hasan Hassan, Minesh Patel, <u>A. Giray Yağlıkçı</u>, Lois Orosa, Jisung Park, and Onur Mutlu, <b>"CLR-DRAM: A Low-Cost DRAM Architecture Enabling Dynamic Capacity-Latency Trade-Off,"</b> in Proceedings of the 47th International Symposium on Computer Architecture (ISCA), Valencia, Spain, June 2020.',
      keywords: ['low-latency', 'density-performance tradeoff', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/CLR-DRAM_capacity-latency-reconfigurable-DRAM_isca20.pdf'}                    
          ]
        },
        {
          text:'Full Talk (20 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=L3Y1eOF9C7U'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/CLR-DRAM_capacity-latency-reconfigurable-DRAM_isca20-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/CLR-DRAM_capacity-latency-reconfigurable-DRAM_isca20-talk.pdf'}
          ]
        },
      ]
    },
    {
      title: "SysScale",
      venue: "ISCA 2020",
      citation: `Jawad Haj-Yahya, Mohammed Alser, Jeremie Kim, <u>A. Giray Yağlıkçı</u>, Nandita Vijaykumar, Efraim Rotem, and Onur Mutlu, <b>"SysScale: Exploiting Multi-domain Dynamic Voltage and Frequency Scaling for Energy Efficient Mobile Processors,"</b> in Proceedings of the 47th International Symposium on Computer Architecture (ISCA), Valencia, Spain, June 2020.
      `,
      keywords: ['', '', '', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/sysscale_multi-DVFS-energy-mobile-processors_isca20.pdf'}                    
          ]
        },
        {
          text:'Full Talk (17 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=UOK0gDDk1i8'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/sysscale_multi-DVFS-energy-mobile-processors_isca20-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/sysscale_multi-DVFS-energy-mobile-processors_isca20-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "EDEN",
      venue: "MICRO 2019",
      citation: `Skanda Koppula, Lois Orosa, <u>A. Giray Yağlıkçı</u>, Roknoddin Azizi, Taha Shahroodi, Konstantinos Kanellopoulos, and Onur Mutlu, <b>"EDEN: Energy-Efficient, High-Performance Neural Network Inference Using Approximate DRAM,"</b> in Proceedings of the 52nd International Symposium on Microarchitecture (MICRO), Columbus, OH, USA, October 2019.`,
      keywords: ['approximate memory', 'dram latency', 'voltage scaling', 'deep neural networks', 'error resiliency'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19.pdf'}                    
          ]
        },
        {
          text:'Lecture (38 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=B5E95OPTlaw'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19-talk.pdf'}
          ]
        },
        {
          text:'Lightning Talk',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=oS-bKY75gXQ'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19-lightning-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19-lightning-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "CROW",
      venue: "ISCA 2019",
      citation: `H. Hassan, M. Patel, J. S. Kim, <u>A. Giray Yağlıkçı</u>, N. Vijaykumar, N. Mansouri Ghiasi, S. Ghose, O. Mutlu, <b>"CROW: A Low-Cost Substrate for Improving DRAM Performance, Energy Efficiency, and Reliability,"</b> in Proceedings of the International Symposium on Computer Architecture (ISCA), June 2019.`,
      keywords: ['memory latency', 'row decoder', 'spare rows', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19.pdf'}                    
          ]
        },
        {
          text:'Full Talk',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=FckbkwW1u_E'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19-talk.pdf'}
          ]
        },
        {
          text:'Lightning Talk',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=8Ml5sz63Jbc'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19-lightning-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19-lightning-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "Vampire",
      venue: "SIGMETRICS 2018",
      citation: `S. Ghose, <u>A. Giray Yağlıkçı</u>, R. Gupta, D. Lee, K. Kudrolli, W. X. Liu, H. Hassan, K. K. Chang, N. Chatterjee, A. Agrawal, M. O'Connor, and O. Mutlu, <b>"What Your DRAM Power Models Are Not Telling You: Lessons from a Detailed Experimental Study,"</b> in Proceedings of the ACM International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS), Irvine, CA, USA, June 2018.`,
      keywords: ['rowhammer', 'characterization', 'real chips', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Abstract',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18-abstract.pdf'}                    
          ]
        },
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18_pomacs18-twocolumn.pdf'}                    
          ]
        },
        {
          text:'POMACS Journal Version',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18_pomacs18.pdf'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "Voltron",
      venue: "SIGMETRICS 2017",
      citation: `K. Chang, <u>A. Giray Yağlıkçı</u>, S. Ghose, A. Agrawal, N. Chatterjee, A. Kashyap, D. Lee, M. O'Connor, H. Hassan, and O. Mutlu, <b>"Understanding Reduced-Voltage Operation in Modern DRAM Devices: Experimental Characterization, Analysis, and Mechanisms,"</b> in Proceedings of the ACM International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS), Urbana-Champaign, IL, USA, June 2017.`,
      keywords: ['voltage scaling', 'access latency', 'characterization', 'real chips', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Abstract',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-abstract.pdf'}                    
          ]
        },
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-paper.pdf'}                    
          ]
        },
        {
          text:'POMACS Journal Version',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-pomacs-onecolumn.pdf'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'play', url:''},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-talk.pdf'}
          ]
        }
      ]
    },
  ]
};
