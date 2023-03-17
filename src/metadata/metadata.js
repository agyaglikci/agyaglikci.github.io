module.exports = {
  name: 'Abdullah Giray Yağlıkçı',
  title: 'Research Assistant at ETH Zurich',
  facts: {
    // 'Residence': '<a href="https://www.google.com/maps/place/London,+UK/@51.5285582,-0.2416814,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862"><i class="fa fa-home fact-icon"></i>London</a>',
    // 'Wiki': `<a href="https://en.wikipedia.org/wiki/William_Shakespeare">
    //               <i class="fa-brands fa-wikipedia-w fact-icon"></i>William_Shakespeare
    //             </a>`,

    'Email': '<a href="mailto:giray.yaglikci@safari.ethz.ch"><i class="fa fa-envelope fact-icon"></i>giray.yaglikci@safari.ethz.ch</a>',
    'Scholar': '<a href="https://scholar.google.com/citations?user=ZQ9ZQYIAAAAJ&hl=en"><i class="fa-brands fa-google fact-icon"></i>AbdullahGirayYaglikci</a>',
    'GitHub': '<a href="https://www.github.com/agyaglikci"><i class="fa-brands fa-github fact-icon"></i>agyaglikci</a>',
    'YouTube': '<a href="https://www.youtube.com/channel/UCPqbz23zyVRXRFv-vtNyZGw"><i class="fa-brands fa-youtube fact-icon"></i>@AbdullahGirayYaglikci</a>',
    'LinkedIn': '<a href="https://www.linkedin.com/in/agyaglikci/"><i class="fa-brands fa-linkedin fact-icon"></i>agyaglikci</a>',
    'Twitter': '<a href="https://twitter.com/agyaglikci"><i class="fa-brands fa-twitter fact-icon"></i>agyaglikci</a>'
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
  positions: [
    {
      title: 'Twelfth Night',
      period: '1600 – 1601',
      skills: ['comedy', 'love'],
      contents: `
Viola finds herself shipwrecked in Illyria and, assuming that her brother Sebastian has died in the wreck, disguises herself as a man to gain a position in Duke Orsino's court. Orsino sends Viola (whom he knows as Cesario) to deliver a message to his love, Olivia. Olivia, however, dislikes the Duke. She falls in love with Viola, who she thinks is a man. Eventually, Viola's brother Sebastian, who in fact was unharmed in the wreck, reappears. At a critical moment, Viola's true identity is revealed when members of the court notice the similarities between her and Sebastian. Olivia quickly falls in love with Sebastian, and Viola confesses her love for the Duke.
`
    },
    {
      title: 'The Tragedy of Romeo and Juliet',
      period: '1595–1596, with a possible early draft written in 1591',
      skills: ['tragedy', 'death', 'love'],
      contents: `
In Verona, Italy, two families, the Montagues and the Capulets, are in the midst of a bloody feud. Romeo, a Montague, and Juliet, a Capulet, fall in love and struggle to maintain their relationship in the face of familial hatred. After Romeo kills Juliet's cousin Tybalt in a fit of passion, things fall apart. Both lovers eventually commit suicide within minutes of each other, and the feuding families make peace over their recent grief.
`
    }
  ],
  papers: [
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
      citation: `<u>A. Giray Yağlıkçı</u>, Haocong Luo, Geraldo F. de Oliviera, Ataberk Olgun, Minesh Patel, Jisung Park, Hasan Hassan, Jeremie S. Kim, Lois Orosa, and Onur Mutlu,
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
      title: "Revisiting RowHammer",
      venue: "ISCA, 2020",
      citation: 'Jeremie S. Kim, Minesh Patel, A. Giray Yağlıkçı, Hasan Hassan, Roknoddin Azizi, Lois Orosa, and Onur Mutlu,  "Revisiting RowHammer: An Experimental Analysis of Modern Devices and Mitigation Techniques," in Proceedings of the 47th International Symposium on Computer Architecture (ISCA), Valencia, Spain, June 2020.',
      keywords: ['rowhammer', 'characterization', 'real chips', 'memory', 'dram', 'hardware'],
      awards: [],
      summary:`
        In this paper, we first present an experimental characterization of RowHammer on 1580 DRAM chips (408× DDR3, 652× DDR4, and 520× LPDDR4) from 300 DRAM modules
        (60× DDR3, 110× DDR4, and 130× LPDDR4) with RowHammer protection mechanisms disabled, spanning multiple different technology nodes from across each of the three major 
        DRAM manufacturers. Our studies definitively show that newer DRAM chips are more vulnerable to RowHammer: as device feature size reduces, the number of activations needed 
        to induce a RowHammer bit flip also reduces, to as few as 9.6k (4.8k to two rows each) in the most vulnerable chip we tested.
      `,
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20.pdf'}                    
          ]
        },
        {
          text:'Short Talk (7 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=hU88UeWE48A&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=104'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20-talk.pdf'}
          ]
        }
      ]
    }
  ]
};
