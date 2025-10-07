import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PlagiarismPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-lg border border-gray-200 rounded-lg">
              <CardContent className="p-12">
                {/* Plagiarism Policy Section */}
                <section className="mb-16">
                  <h1 className="text-3xl font-bold text-green-700 mb-8 border-l-4 border-green-700 pl-4">
                    Plagiarism Policy
                  </h1>

                  <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                    <p>
                      Plagiarism is copying someone else's previous ideas, processes, results, or words without giving
                      credit to the original author and source. It is a serious academic misconduct that undermines the
                      principles of integrity, honesty, and intellectual rigor in scholarly endeavors. Someone commits
                      plagiarism when they intentionally or knowingly replicate the work of others, or when they
                      reproduce content without giving proper credit.
                    </p>

                    <p>
                      If plagiarism is detected by the editorial board member, reviewer, editor etc., in any stage of
                      article process- before or after acceptance, during editing or at a page proof stage. We will
                      alert the same to the author(s) and will ask them to rewrite the content or to cite the references
                      from where the content has been taken. If more than 10% of the paper is plagiarized- the article
                      will be rejected and the same is notified to the author. The Turnitin software is used to check
                      the plagiarism percentage of both web and AI content for IQCCT'26.
                    </p>

                    <p>
                      In case a manuscript is found to be plagiarized after publication, the Editor-in-Chief will
                      conduct preliminary investigation, may be with the help of a suitable committee constituted for
                      the purpose. If the manuscript is found to be plagiarized beyond the acceptable limits, the
                      journal will contact the author's Institute / College / University and Funding Agency, if any.
                    </p>
                  </div>
                </section>

                {/* Plagiarism Guidelines Section */}
                <section>
                  <h2 className="text-3xl font-bold text-green-700 mb-8 border-l-4 border-green-700 pl-4">
                    Plagiarism Guidelines for IQCCT'26
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4">
                      The following types of plagiarism are considered by us:
                    </h3>
                  </div>

                  <div className="space-y-8 text-gray-700 leading-relaxed">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">1. Full Plagiarism:</h4>
                      <p className="ml-6">
                        Previously published content that remains unchanged in text, ideas, or grammar is considered
                        full plagiarism. This involves presenting exact text from a source as one's own.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">2. Partial Plagiarism:</h4>
                      <p className="ml-6">
                        If content is derived from multiple sources and extensively rephrased without proper
                        attribution, it is classified as partial plagiarism.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">3. Self-Plagiarism:</h4>
                      <p className="ml-6">
                        When authors reuse their own previously published work without proper citation or disclosure, it
                        constitutes self-plagiarism.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">4. Mosaic Plagiarism:</h4>
                      <p className="ml-6">
                        This involves borrowing phrases, sentences, or ideas from multiple sources and weaving them
                        together without proper attribution.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">5. Accidental Plagiarism:</h4>
                      <p className="ml-6">
                        Occurs when proper citation is neglected, sources are misquoted, or paraphrasing too closely
                        resembles the original source without attribution.
                      </p>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
