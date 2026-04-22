const NSIA_INVITED_TALKS = [
    {
        id: "slot-invited-1415",
        session: "Session I",
        time: "14:15 - 14:45",
        title: "Compositional Sparsity",
        speakerId: "speaker-1"
    },
    {
        id: "slot-invited-1500",
        session: "Session I",
        time: "15:00 - 15:30",
        title: "Smarter and Sparser AI with Complex Network Science",
        speakerId: "speaker-2"
    },
    {
        id: "slot-invited-1630",
        session: "Session II",
        time: "16:30 - 17:00",
        title: "The Cost of Sharing: From Topological Multitasking Limits to Semantic Horizons",
        speakerId: "speaker-3"
    },
    {
        id: "slot-invited-1715",
        session: "Session II",
        time: "17:15 - 17:45",
        title: "Title TBC",
        speakerId: "speaker-4"
    },
    {
        id: "slot-invited-1800",
        session: "Session II",
        time: "18:00 - 18:30",
        title: "Representation Learning and Physics",
        speakerId: "speaker-5"
    }
    // {
    //     id: "slot-invited-1845",
    //     session: "Session II",
    //     time: "18:45 - 19:15",
    //     title: "Title TBC",
    //     speakerId: "speaker-6"
    // }
];

const NSIA_SPEAKERS = [
    {
        id: "speaker-1",
        name: "Tomaso Poggio",
        title: "",
        affiliation: "MIT",
        bio: "Tomaso Poggio is one of the founders of computational neuroscience. He pioneered a model of the fly’s visual system as well as of human stereovision. His research has always been interdisciplinary, bridging brains and computers. It is now focused on the mathematics of deep learning and on the computational neuroscience of the visual cortex. Poggio also introduced using an approach called regularization theory to computational vision, made key contributions to the biophysics of computation and to learning theory, and developed an influential model of recognition in the visual cortex. Research in the Poggio lab is guided by the belief that understanding learning is at the heart of understanding both biological and artificial intelligence. Learning is therefore the route to understanding how the human brain works and for making intelligent machines.",
        photo: "images/poggio.png",
        links: {
            x: "",
            linkedin: "",
            website: "https://mcgovern.mit.edu/profile/tomaso-poggio/",
            googleScholar: "https://scholar.google.com/citations?user=WgAGy7wAAAAJ&hl=en"
        },
        slotId: "slot-invited-1415"
    },
    
    {
        id: "speaker-2",
        name: "Rebekka Burkholz",
        title: "",
        affiliation: "Helmholtz Center CISPA",
        bio: "Dr. Rebekka Burkholz is a faculty member at the CISPA Helmholtz Center for Information Security in Saarbrücken, where she leads the relational machine learning group. Her main goal is to develop efficient deep learning algorithms that are robust to noise, require small sample sizes, and are generally applicable in the sciences. Her work is founded in theory with implications for real world applications and is often characterized by a complex network science perspective. Her favourite applications and sources of inspiration are currently in the biomedical domain, pharmacy, and physics. Her group is supported by the ERC starting grant SPARSE-ML and by Apple Research.",
        photo: "images/burkholz.jpeg",
        links: {
            x: "",
            linkedin: "https://www.linkedin.com/in/rebekka-burkholz-68375311a",
            website: "https://sites.google.com/view/rebekkaburkholz/",
            googleScholar: "https://scholar.google.com/citations?user=vkWBb2wAAAAJ&hl=de"
        },
        slotId: "slot-invited-1500"
    },
    {
        id: "speaker-3",
        name: "Giovanni Petri",
        title: "",
        affiliation: "Northeastern University London",
        bio: "Professor Giovanni Petri's main research focus is on the theoretical and empirical analysis of complex systems, with an emphasis on the structural and temporal properties of networks with higher‐order interactions and feedback dynamics. It also includes social contagion and team dynamics, the investigation of whole‐brain activation patterns, and the structure of cognitive representations in natural and syntethic neural architectures, with particular reference to their topological structure, merging statistical physics approach, algebraic topology and data analysis.",
        photo: "images/petri.png",
        links: {
            x: "https://x.com/lordgrilo",
            linkedin: "https://www.linkedin.com/in/giovannipetri",
            website: "https://lordgrilo.github.io/",
            googleScholar: "https://scholar.google.co.uk/citations?user=jb__2PIAAAAJ&hl=en"
        },
        slotId: "slot-invited-1630"
    },
    {
        id: "speaker-4",
        name: "Nataša Pržulj",
        title: "",
        affiliation: "Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)",
        bio: "Professor Pržulj is a leader in biological network analysis and a pioneer in network biology geometry applied to personalized (precision) medicine. In 2004, she introduced graphlets to extract biomedical knowledge from molecular networks, revolutionizing the field. Graphlets are a basis of many AI methodologies to produce feature vectors and matrices capturing network topology that are inputted into many AI/ML algorithms for network data analytics in various domains. They are the subject of around 23,000 research papers and hundreds of patents according to Google Scholar. Professor Pržulj’s current research focuses on developing new AI methods for multi-omics data fusion applied to precision medicine and discovery of precision therapeutics.",
        photo: "images/natasa.jpeg",
        links: {
            x: "",
            linkedin: "",
            website: "https://mbzuai.ac.ae/study/faculty/natasa-przulj-2/",
            googleScholar: "https://scholar.google.com/citations?user=mLIsLdAAAAAJ&hl=en"
        },
        slotId: "slot-invited-1715"
    },
    // {
    //     id: "speaker-6",
    //     name: "Yong Li",
    //     title: "",
    //     affiliation: "Tsinghua University",
    //     bio: "Professor Yong Li is a Faculty Member of the Department of Electronic Engineering, Tsinghua University. His research interests are in the area of artificial intelligence, data science, and mobile computing.",
    //     photo: "images/yongli.jpg",
    //     links: {
    //         x: "",
    //         linkedin: "",
    //         website: "https://fi.ee.tsinghua.edu.cn/~liyong/",
    //         googleScholar: "https://scholar.google.com/citations?user=kmgzPeQAAAAJ&hl=en"
    //     },
    //     slotId: "slot-invited-1845"
    // },
    {
        id: "speaker-5",
        name: "Michael Williams",
        title: "",
        affiliation: "MIT",
        bio: "Professor Williams is the founder and leader of the LHCb group at MIT and the inaugural Deputy Director of the NSF AI Institute for Artificial Intelligence and Fundamental Interactions (IAIFI). He is primarily focused on searching for as-yet-unknown particles and forces, possibly components of the dark sector of matter, and on studying largely unexplored emergent properties of QCD. The LHCb group at MIT is a leader in the LHCb real-time data-processing system. To enable his scientific pursuits, Mike also works on advancing the usage of machine learning algorithms and other state-of-the-art data-science tools within the domain of particle physics research, and on advancing our understanding of AI itself.",
        photo: "images/williams.jpg",
        links: {
            x: "",
            linkedin: "",
            website: "https://physics.mit.edu/faculty/michael-williams/",
            googleScholar: ""
        },
        slotId: "slot-invited-1800"
    }
];
