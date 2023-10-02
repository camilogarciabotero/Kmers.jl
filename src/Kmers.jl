# Kmers.jl
# ========
#
# Module for kmers and short sequence fragments.
#
# This file is a part of the Kmers.jl, a package in the BioJulia ecosystem.
# License is MIT: https://github.com/BioJulia/Kmers.jl/blob/master/LICENSE
module Kmers

export Kmer,
    DNAKmer,
    RNAKmer,
    AAKmer,
    DNACodon,
    RNACodon,
    ReverseGeneticCode,
    reverse_translate,
    reverse_translate!,
    @mer_str,

    # Immutable operations
    push,
    pushfirst,
    shift,
    shift_first,

    # Iterators
    FwKmers,
    FwDNAMers,
    FwRNAMers,
    FwAAMers,

    ##################
    # Re-exports
    ##################
    # BioSymbols re-exports
    NucleicAcid,
    DNA,
    RNA,
    DNA_A,
    DNA_C,
    DNA_G,
    DNA_T,
    DNA_M,
    DNA_R,
    DNA_W,
    DNA_S,
    DNA_Y,
    DNA_K,
    DNA_V,
    DNA_H,
    DNA_D,
    DNA_B,
    DNA_N,
    DNA_Gap,
    ACGT,
    ACGTN,
    RNA_A,
    RNA_C,
    RNA_G,
    RNA_U,
    RNA_M,
    RNA_R,
    RNA_W,
    RNA_S,
    RNA_Y,
    RNA_K,
    RNA_V,
    RNA_H,
    RNA_D,
    RNA_B,
    RNA_N,
    RNA_Gap,
    ACGU,
    ACGUN,
    AminoAcid,
    AA_A,
    AA_R,
    AA_N,
    AA_D,
    AA_C,
    AA_Q,
    AA_E,
    AA_G,
    AA_H,
    AA_I,
    AA_L,
    AA_K,
    AA_M,
    AA_F,
    AA_P,
    AA_S,
    AA_T,
    AA_W,
    AA_Y,
    AA_V,
    AA_O,
    AA_U,
    AA_B,
    AA_J,
    AA_Z,
    AA_X,
    AA_Term,
    AA_Gap,

    # BioSequences re-exports
    Alphabet,
    BioSequence,
    NucleicAcidAlphabet,
    AminoAcidAlphabet,
    DNAAlphabet,
    RNAAlphabet,
    translate,
    complement,
    reverse_complement

# Kmers.jl is tightly coupled to BioSequences and relies on much of its internals.
# Hence, we do not care about carefully importing specific symbols
using BioSequences

"""
    Kmers.Unsafe

Internal trait object used to access unsafe methods of functions.
`unsafe` is the singleton of `Unsafe`.
"""
struct Unsafe end
const unsafe = Unsafe()

include("tuple_bitflipping.jl")
include("kmer.jl")
include("indexing.jl")
include("transformations.jl")
include("revtrans.jl")

include("iterators/common.jl")
include("iterators/FwKmers.jl")
include("iterators/CanonicalKmers.jl")
include("iterators/SpacedKmers.jl")

end # module
