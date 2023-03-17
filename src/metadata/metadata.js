module.exports = {
  name: 'Abdullah Giray Yaglikci',
  title: 'Computer Architect and Research Assistant at SAFARI Research Group at ETH Zurich',
  facts: {
    // 'Residence': '<a href="https://www.google.com/maps/place/London,+UK/@51.5285582,-0.2416814,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862"><i class="fa fa-home fact-icon"></i>London</a>',
    // 'Wiki': `<a href="https://en.wikipedia.org/wiki/William_Shakespeare">
    //               <i class="fa-brands fa-wikipedia-w fact-icon"></i>William_Shakespeare
    //             </a>`,
    'Twitter': `<a href="https://twitter.com/agyaglikci"><i class="fa-brands fa-twitter fact-icon"></i>agyaglikci</a>`,
    'LinkedIn': `<a href="https://www.linkedin.com/in/agyaglikci/"><i class="fa-brands fa-linkedin fact-icon"></i>agyaglikci</a>`,
    'Email': '<a href="mailto:giray.yaglikci@safari.ethz.ch"><i class="fa fa-envelope fact-icon"></i>giray.yaglikci@safari.ethz.ch</a>'
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
      header: 'BlockHammer: Preventing RowHammer at Low Cost by Blacklisting Rapidly-Accessed DRAM Rows',
      citation: 'A. Giray Yaglikci, Minesh Patel, Jeremie S. Kim, Roknoddin Azizi, Ataberk Olgun, Lois Orosa, Hasan Hassan, Jisung Park, Konstantinos Kanellopoulos, Taha Shahroodi, Saugata Ghose, and Onur Mutlu, "BlockHammer: Preventing RowHammer at Low Cost by Blacklisting Rapidly-Accessed DRAM Rows," in Proceedings of the 27th International Symposium on High-Performance Computer Architecture (HPCA), Virtual, February-March 2021.',
      keywords: ['rowhammer', 'defense', 'throttling', 'memory', 'dram', 'memory controller', 'hardware'],
      summary:`
        In this paper, we show that it is possible to efficiently and scalably prevent RowHammer bit-flips 
        without knowledge of or modification to DRAM internals. To this end, we introduce BlockHammer, 
        a low-cost, effective, and easy-to-adopt RowHammer mitigation mechanism that prevents all RowHammer 
        bit-flips while overcoming the two key challenges: scalability with worsening RowHammer vulnerability 
        and compatibility with commodity DRAM chips. BlockHammer selectively throttles memory accesses that 
        may cause RowHammer bit-flips. To our knowledge, this is the first work that prevents RowHammer 
        bit-flips efficiently and scalably without knowledge of or modifications to DRAM internals.`,
      urls:[
        {text: 'Full paper', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer_preventing-DRAM-rowhammer-at-low-cost_hpca21.pdf'},
        {text: 'Full Talk Video', url: 'https://youtu.be/cWbW4qoDFds'},
        {text: 'Full Talk Slides (pptx)', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-talk.pptx'},
        {text: 'Full Talk Slides (pdf)', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-talk.pdf'},
        {text: 'Live Talk Video', url:'https://youtu.be/40SXSKXW5kY'},
        {text: 'Live Talk Slides (pptx)', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-live.pptx'},
        {text: 'Live Talk Slides (pdf)', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-live.pdf'}
      ]
    }
  ]
};
