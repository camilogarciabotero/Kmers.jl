var documenterSearchIndex = {"docs":
[{"location":"transforms/#","page":"Indexing & modifying kmers","title":"Indexing & modifying kmers","text":"CurrentModule = Kmers\nDocTestSetup = quote\n    using Kmers\nend","category":"page"},{"location":"transforms/#Indexing-and-modifying-kmers-1","page":"Indexing & modifying kmers","title":"Indexing & modifying kmers","text":"","category":"section"},{"location":"transforms/#Indexing-1","page":"Indexing & modifying kmers","title":"Indexing","text":"","category":"section"},{"location":"transforms/#","page":"Indexing & modifying kmers","title":"Indexing & modifying kmers","text":"As BioSequence concrete subtypes, kmers can be indexed using integers","category":"page"},{"location":"transforms/#","page":"Indexing & modifying kmers","title":"Indexing & modifying kmers","text":"julia> seq = DNAKmer{5}(DNA_T, DNA_T, DNA_A, DNA_G, DNA_C)\nDNA 5-mer:\nTTAGC\n\njulia> seq[3]\nDNA_A","category":"page"},{"location":"transforms/#","page":"Indexing & modifying kmers","title":"Indexing & modifying kmers","text":"Currently, indexing Kmers using arbitrary ranges is not implemented because it is not possible to do in a type-stable way.","category":"page"},{"location":"transforms/#Modifying-sequences-1","page":"Indexing & modifying kmers","title":"Modifying sequences","text":"","category":"section"},{"location":"transforms/#","page":"Indexing & modifying kmers","title":"Indexing & modifying kmers","text":"Many modifying operations that are possible for some BioSequences such as LongSequence are not possible for Kmers, this is primarily due to the fact Kmers are an immutable struct.","category":"page"},{"location":"transforms/#","page":"Indexing & modifying kmers","title":"Indexing & modifying kmers","text":"However some non-mutating transformations are available:","category":"page"},{"location":"transforms/#","page":"Indexing & modifying kmers","title":"Indexing & modifying kmers","text":"BioSequences.complement(::Kmer)\nBase.reverse(::Kmer)\nBioSequences.reverse_complement(::Kmer)\ncanonical","category":"page"},{"location":"transforms/#BioSymbols.complement-Tuple{Kmer}","page":"Indexing & modifying kmers","title":"BioSymbols.complement","text":"complement(seq::T) where {T<:Kmer}\n\nReturn the complement of a short sequence type x.\n\n\n\n\n\n","category":"method"},{"location":"transforms/#Base.reverse-Tuple{Kmer}","page":"Indexing & modifying kmers","title":"Base.reverse","text":"reverse(seq::BioSequence)\n\nCreate reversed copy of a biological sequence.\n\n\n\n\n\nreverse(seq::Kmer{A,K,N}) where {A,K,N}\n\nReturn the reverse of short sequence type variable seq.\n\n\n\n\n\n","category":"method"},{"location":"transforms/#BioSequences.reverse_complement-Tuple{Kmer}","page":"Indexing & modifying kmers","title":"BioSequences.reverse_complement","text":"reverse_complement(x::Kmer)\n\nReturn the reverse complement of x.\n\n\n\n\n\n","category":"method"},{"location":"transforms/#Kmers.canonical","page":"Indexing & modifying kmers","title":"Kmers.canonical","text":"canonical(x::Kmer)\n\nReturn the canonical sequence of x.\n\nA canonical sequence is the numerical lesser of a k-mer and its reverse complement. This is useful in hashing/counting sequences in data that is not strand specific, and thus observing the short sequence is equivalent to observing its reverse complement.\n\n\n\n\n\n","category":"function"},{"location":"construction/#","page":"Constructing kmers","title":"Constructing kmers","text":"CurrentModule = Kmers\nDocTestSetup = quote\n    using Kmers\nend","category":"page"},{"location":"construction/#Construction-and-conversion-1","page":"Constructing kmers","title":"Construction & conversion","text":"","category":"section"},{"location":"construction/#","page":"Constructing kmers","title":"Constructing kmers","text":"Kmer{A,K,N}(itr)","category":"page"},{"location":"construction/#Kmers.Kmer-Union{Tuple{Any}, Tuple{N}, Tuple{K}, Tuple{A}} where {A, K, N}","page":"Constructing kmers","title":"Kmers.Kmer","text":"Kmer{A,K,N}(itr) where {A,K,N}\n\nConstruct a Kmer{A,K,N} from an iterable.\n\nThe most generic constructor.\n\nCurrently the iterable must have length & support getindex with integers.\n\nExamples\n\njulia> ntseq = LongSequence(\"TTAGC\") # 4-bit DNA alphabet\n5nt DNA Sequence:\nTTAGC\n\njulia> DNAKmer{5}(ntseq) # 2-Bit DNA alphabet\nDNA 5-mer:\nTTAGC\n\n\n\n\n\nKmer{A,K,N}(seq::BioSequence{A})\n\nConstruct a Kmer{A,K,N} from a BioSequence{A}.\n\nThis particular method is specialised for BioSequences, and for when the Kmer and BioSequence types used, share the same alphabet, since a lot of encoding / decoding can be skipped, and the problem is mostly one of shunting bits around. In the case where the alphabet of the Kmer and the alphabet of the BioSequence differ, dispatch to the more generic constructor occurs instead.\n\nExamples\n\njulia> ntseq = LongSequence{DNAAlphabet{2}}(\"TTAGC\") # 2-bit DNA alphabet\n5nt DNA Sequence:\nTTAGC\n\njulia> DNAKmer{5}(ntseq) # 2-Bit DNA alphabet\nDNA 5-mer:\nTTAGC\n\n\n\n\n\nKmer{A,K}(itr) where {A,K}\n\nConstruct a Kmer{A,K,N} from an iterable.\n\nThis is a convenience method which will work out the correct N parameter, for your given choice of A & K.\n\n\n\n\n\nKmer{A}(itr) where {A}\n\nConstruct a Kmer{A,K,N} from an iterable.\n\nThis is a convenience method which will work out K from the length of itr, and the correct N parameter, for your given choice of A & K.\n\nwarning: Warning\nSince this gets K from runtime values, this is gonna be slow!\n\n\n\n\n\nKmer(nts::Vararg{DNA,K}) where {K}\n\nConstruct a Kmer from a variable number K of DNA nucleotides.\n\nExamples\n\njulia> Kmer(DNA_T, DNA_T, DNA_A, DNA_G, DNA_C)\nDNA 5-mer:\nTTAGC\n\n\n\n\n\nKmer(nts::Vararg{RNA,K}) where {K}\n\nConstruct a Kmer from a variable number K of RNA nucleotides.\n\nExamples\n\njulia> Kmer(RNA_U, RNA_U, RNA_A, RNA_G, RNA_C)\nDNA 5-mer:\nUUAGC\n\n\n\n\n\n","category":"method"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"CurrentModule = Kmers\nDocTestSetup = quote\n    using Kmers\nend","category":"page"},{"location":"kmer_types/#Kmer-types-1","page":"Kmer types","title":"Kmer types","text":"","category":"section"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"Bioinformatic analyses make extensive use of kmers. Kmers are contiguous sub-strings of k nucleotides of some reference sequence. ","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"They are used extensively in bioinformatic analyses as an informational unit. This concept popularised by short read assemblers.  Analyses within the kmer space benefit from a simple formulation of the sampling problem and direct in-hash comparisons.","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"BioSequences provides the following types to represent Kmers.","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"Kmer","category":"page"},{"location":"kmer_types/#Kmers.Kmer","page":"Kmer types","title":"Kmers.Kmer","text":"Kmer{A<:Alphabet,K,N} <: BioSequence{A}\n\nA parametric, immutable, bitstype for representing Kmers - short sequences. Given the number of Kmers generated from raw sequencing reads, avoiding repetetive memory allocation and triggering of garbage collection is important, as is the ability to effectively pack Kmers into arrays and similar collections.\n\nIn practice that means we an immutable bitstype as the internal representation of these sequences. Thankfully, this is not much of a limitation - kmers are rarely manipulated and so by and large don't have to be mutable.\n\nExcepting their immutability, they fulfill the rest of the API and behaviours expected from a concrete BioSequence type, and non-mutating transformations of the type are still defined.\n\nwarning: Warning\nGiven their immutability, setindex and mutating sequence transformations are not implemented for Kmers e.g. reverse_complement!. \n\ntip: Tip\nNote that some sequence transformations that are not mutating are available, since they can return a new kmer value as a result e.g. reverse_complement. \n\n\n\n\n\n","category":"type"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"The following aliases are also defined:","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"DNAKmer\nDNAKmer27\nDNAKmer31\nDNAKmer63\nRNAKmer\nRNAKmer27\nRNAKmer31\nRNAKmer63","category":"page"},{"location":"kmer_types/#Kmers.DNAKmer","page":"Kmer types","title":"Kmers.DNAKmer","text":"Shortcut for the type Kmer{DNAAlphabet{2},K,N}\n\n\n\n\n\n","category":"type"},{"location":"kmer_types/#Kmers.DNAKmer27","page":"Kmer types","title":"Kmers.DNAKmer27","text":"Shortcut for the type DNAKmer{27,1}\n\n\n\n\n\n","category":"type"},{"location":"kmer_types/#Kmers.DNAKmer31","page":"Kmer types","title":"Kmers.DNAKmer31","text":"Shortcut for the type DNAKmer{31,1}\n\n\n\n\n\n","category":"type"},{"location":"kmer_types/#Kmers.DNAKmer63","page":"Kmer types","title":"Kmers.DNAKmer63","text":"Shortcut for the type DNAKmer{63,2}\n\n\n\n\n\n","category":"type"},{"location":"kmer_types/#Kmers.RNAKmer","page":"Kmer types","title":"Kmers.RNAKmer","text":"Shortcut for the type Kmer{RNAAlphabet{2},K,N}\n\n\n\n\n\n","category":"type"},{"location":"kmer_types/#Kmers.RNAKmer27","page":"Kmer types","title":"Kmers.RNAKmer27","text":"Shortcut for the type RNAKmer{27,1}\n\n\n\n\n\n","category":"type"},{"location":"kmer_types/#Kmers.RNAKmer31","page":"Kmer types","title":"Kmers.RNAKmer31","text":"Shortcut for the type RNAKmer{31,1}\n\n\n\n\n\n","category":"type"},{"location":"kmer_types/#Kmers.RNAKmer63","page":"Kmer types","title":"Kmers.RNAKmer63","text":"Shortcut for the type RNAKmer{63,2}\n\n\n\n\n\n","category":"type"},{"location":"kmer_types/#Skipmers-1","page":"Kmer types","title":"Skipmers","text":"","category":"section"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"For some analyses, the contiguous nature of kmers imposes limitations. A single base difference, due to real biological variation or a sequencing error, affects all k-mers crossing that position thus impeding direct analyses by identity. Also, given the strong interdependence of local sequence, contiguous sections capture less information about genome structure, and so they are more affected by sequence repetition. ","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"Skipmers are a generalisation of the concept of a kmer. They are created using a cyclic pattern of used-and-skipped positions which achieves increased entropy and tolerance to nucleotide substitution differences by following some simple rules.","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"Skipmers preserve many of the elegant properties of kmers such as reverse complementability and existence of a canonical representation. Also, using cycles of three greatly increases the power of direct intersection between the genomes of different organisms by grouping together the more conserved  nucleotides of protein-coding regions.","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"BioSequences currently does not provide a separate type for skipmers, they are represented using Mer and BigMer as their representation as a short immutable sequence encoded in an unsigned integer is the same. The distinction lies in how they are generated.","category":"page"},{"location":"kmer_types/#Skipmer-generation-1","page":"Kmer types","title":"Skipmer generation","text":"","category":"section"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"A skipmer is a simple cyclic q-gram that includes m out of every n bases until a total of k bases is reached. ","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"This is illustrated in the figure below (from this paper.):","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"(Image: skipmer-fig)","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"To maintain cyclic properties and the existence of the reverse-complement as a skipmer defined by the same function, k should be a multiple of m.","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"This also enables the existence of a canonical representation for each skipmer, defined as the lexicographically smaller of the forward and reverse-complement  representations.","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"Defining m, n and k fixes a value for S, the total span of the skipmer, given by: ","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"S = n * (frackm - 1) + m","category":"page"},{"location":"kmer_types/#","page":"Kmer types","title":"Kmer types","text":"To see how to iterate over skipmers cf. kmers, see the Iteration section of the manual.","category":"page"},{"location":"#Kmers-1","page":"Home","title":"Kmers","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"(Image: Latest Release) (Image: MIT license) (Image: Documentation) (Image: Pkg Status)","category":"page"},{"location":"#Description-1","page":"Home","title":"Description","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Kmers provides a specialised concrete BioSequence subtype, optimised for representing short immutable sequences called kmers: contiguous sub-strings of k nucleotides of some reference sequence.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"They are used extensively in bioinformatic analyses as an informational unit. This concept was popularised by short read assemblers.  Analyses within the kmer space benefit from a simple formulation of the sampling problem and direct in-hash comparisons.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Kmers provides the type representing kmers as well as the implementations of the APIs specified by the BioSequences.jl package.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"You can install BioSequences from the julia REPL. Press ] to enter pkg mode, and enter the following:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"add Kmers","category":"page"},{"location":"#","page":"Home","title":"Home","text":"If you are interested in the cutting edge of the development, please check out the master branch to try new features before release.","category":"page"},{"location":"#Testing-1","page":"Home","title":"Testing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Kmers is tested against Julia 1.X on Linux, OS X, and Windows.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: Unit tests) (Image: Documentation) (Image: )","category":"page"},{"location":"#Contributing-1","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Take a look at the contributing files detailed contributor and maintainer guidelines, and code of conduct.","category":"page"},{"location":"#Financial-contributions-1","page":"Home","title":"Financial contributions","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We also welcome financial contributions in full transparency on our open collective. Anyone can file an expense. If the expense makes sense for the development of the community, it will be \"merged\" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.","category":"page"},{"location":"#Backers-and-Sponsors-1","page":"Home","title":"Backers & Sponsors","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Thank you to all our backers and sponsors!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Love our work and community? Become a backer.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: backers)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Does your company use BioJulia? Help keep BioJulia feature rich and healthy by sponsoring the project Your logo will show up here with a link to your website.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )","category":"page"},{"location":"#Questions?-1","page":"Home","title":"Questions?","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If you have a question about contributing or using BioJulia software, come on over and chat to us on Gitter, or you can try the Bio category of the Julia discourse site.","category":"page"}]
}
