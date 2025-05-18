"use client"

import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"

export default function TermsOfServicePage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SectionTransition className="pt-32 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-8">
                {language === "en" ? "Terms of Service" : "Conditions d'Utilisation"}
              </h1>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg mb-6">
                  {language === "en" ? "Last Updated: May 17, 2025" : "Dernière mise à jour: 17 Mai 2025"}
                </p>

                {language === "en" ? (
                  // English content
                  <>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                    <p>
                      Welcome to Zentropic AI. These terms and conditions outline the rules and regulations for the use
                      of our website.
                    </p>
                    <p className="mt-4">
                      By accessing this website, we assume you accept these terms and conditions in full. Do not
                      continue to use Zentropic AI's website if you do not accept all of the terms and conditions stated
                      on this page.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. License</h2>
                    <p>
                      Unless otherwise stated, Zentropic AI and/or its licensors own the intellectual property rights
                      for all material on this website. All intellectual property rights are reserved. You may view
                      and/or print pages from the website for your own personal use subject to restrictions set in these
                      terms and conditions.
                    </p>
                    <p className="mt-4">You must not:</p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>Republish material from this website</li>
                      <li>Sell, rent or sub-license material from this website</li>
                      <li>Reproduce, duplicate or copy material from this website</li>
                      <li>
                        Redistribute content from Zentropic AI (unless content is specifically made for redistribution)
                      </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Content</h2>
                    <p>
                      In these terms and conditions, "User Content" shall mean any audio, video, text, images or other
                      material you choose to display on this website. By displaying your User Content, you grant
                      Zentropic AI a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use,
                      reproduce, adapt, publish, translate and distribute it in any and all media.
                    </p>
                    <p className="mt-4">
                      Your User Content must be your own and must not be infringing on any third party's rights.
                      Zentropic AI reserves the right to remove any of your content from this website at any time
                      without notice.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. No Warranties</h2>
                    <p>
                      This website is provided "as is," with all faults, and Zentropic AI makes no express or implied
                      representations or warranties, of any kind related to this website or the materials contained on
                      this website.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
                    <p>
                      In no event shall Zentropic AI, nor any of its officers, directors and employees, be liable to you
                      for anything arising out of or in any way connected with your use of this website, whether such
                      liability is under contract, tort or otherwise, and Zentropic AI, including its officers,
                      directors and employees shall not be liable for any indirect, consequential or special liability
                      arising out of or in any way related to your use of this website.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Indemnification</h2>
                    <p>
                      You hereby indemnify to the fullest extent Zentropic AI from and against any and all liabilities,
                      costs, demands, causes of action, damages and expenses (including reasonable attorney's fees)
                      arising out of or in any way related to your breach of any of the provisions of these terms.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">7. Severability</h2>
                    <p>
                      If any provision of these terms is found to be unenforceable or invalid under any applicable law,
                      such unenforceability or invalidity shall not render these terms unenforceable or invalid as a
                      whole, and such provisions shall be deleted without affecting the remaining provisions herein.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">8. Variation of Terms</h2>
                    <p>
                      Zentropic AI is permitted to revise these terms at any time as it sees fit, and by using this
                      website you are expected to review such terms on a regular basis to ensure you understand all
                      terms and conditions governing use of this website.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law & Jurisdiction</h2>
                    <p>
                      These terms will be governed by and construed in accordance with the laws of the United States,
                      and you submit to the non-exclusive jurisdiction of the state and federal courts located in the
                      United States for the resolution of any disputes.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
                    <p>If you have any questions about these Terms of Service, please contact us at:</p>
                    <p className="mt-2">
                      <strong>Email:</strong> legal@zentropicai.com
                      <br />
                      <strong>Address:</strong> 123 Tech Street, Suite 100, San Francisco, CA 94107
                    </p>
                  </>
                ) : (
                  // French content
                  <>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                    <p>
                      Bienvenue chez Zentropic AI. Ces conditions générales définissent les règles et réglementations
                      pour l'utilisation de notre site web.
                    </p>
                    <p className="mt-4">
                      En accédant à ce site web, nous supposons que vous acceptez ces conditions générales dans leur
                      intégralité. Ne continuez pas à utiliser le site web de Zentropic AI si vous n'acceptez pas toutes
                      les conditions générales énoncées sur cette page.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. Licence</h2>
                    <p>
                      Sauf indication contraire, Zentropic AI et/ou ses concédants de licence détiennent les droits de
                      propriété intellectuelle pour tout le matériel sur ce site web. Tous les droits de propriété
                      intellectuelle sont réservés. Vous pouvez consulter et/ou imprimer des pages du site web pour
                      votre usage personnel, sous réserve des restrictions énoncées dans ces conditions générales.
                    </p>
                    <p className="mt-4">Vous ne devez pas:</p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>Republier du matériel provenant de ce site web</li>
                      <li>Vendre, louer ou sous-licencier du matériel provenant de ce site web</li>
                      <li>Reproduire, dupliquer ou copier du matériel provenant de ce site web</li>
                      <li>
                        Redistribuer du contenu de Zentropic AI (sauf si le contenu est spécifiquement destiné à être
                        redistribué)
                      </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. Contenu de l'Utilisateur</h2>
                    <p>
                      Dans ces conditions générales, "Contenu de l'Utilisateur" désigne tout audio, vidéo, texte, images
                      ou autre matériel que vous choisissez d'afficher sur ce site web. En affichant votre Contenu
                      d'Utilisateur, vous accordez à Zentropic AI une licence non exclusive, mondiale, irrévocable,
                      libre de redevance, pouvant faire l'objet d'une sous-licence pour utiliser, reproduire, adapter,
                      publier, traduire et distribuer ce contenu dans tous les médias.
                    </p>
                    <p className="mt-4">
                      Votre Contenu d'Utilisateur doit être le vôtre et ne doit pas porter atteinte aux droits d'un
                      tiers. Zentropic AI se réserve le droit de supprimer n'importe lequel de vos contenus de ce site
                      web à tout moment sans préavis.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Aucune Garantie</h2>
                    <p>
                      Ce site web est fourni "tel quel", avec tous ses défauts, et Zentropic AI ne fait aucune
                      déclaration ou garantie expresse ou implicite, de quelque nature que ce soit, liée à ce site web
                      ou aux matériaux contenus sur ce site web.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation de Responsabilité</h2>
                    <p>
                      En aucun cas, Zentropic AI, ni aucun de ses dirigeants, administrateurs et employés, ne sera
                      responsable envers vous pour quoi que ce soit découlant de ou lié de quelque manière que ce soit à
                      votre utilisation de ce site web, que cette responsabilité soit contractuelle, délictuelle ou
                      autre, et Zentropic AI, y compris ses dirigeants, administrateurs et employés, ne sera pas
                      responsable des dommages indirects, consécutifs ou spéciaux découlant de ou liés de quelque
                      manière que ce soit à votre utilisation de ce site web.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Indemnisation</h2>
                    <p>
                      Vous indemnisez par la présente, dans toute la mesure du possible, Zentropic AI contre toutes
                      responsabilités, coûts, demandes, causes d'action, dommages et dépenses (y compris les honoraires
                      raisonnables d'avocat) découlant de ou liés de quelque manière que ce soit à votre violation de
                      l'une des dispositions de ces conditions.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">7. Divisibilité</h2>
                    <p>
                      Si une disposition de ces conditions est jugée inapplicable ou invalide en vertu d'une loi
                      applicable, cette inapplicabilité ou invalidité ne rendra pas ces conditions inapplicables ou
                      invalides dans leur ensemble, et ces dispositions seront supprimées sans affecter les dispositions
                      restantes des présentes.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">8. Variation des Conditions</h2>
                    <p>
                      Zentropic AI est autorisé à réviser ces conditions à tout moment comme il le juge approprié, et en
                      utilisant ce site web, vous êtes censé examiner ces conditions régulièrement pour vous assurer que
                      vous comprenez tous les termes et conditions régissant l'utilisation de ce site web.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">9. Loi Applicable & Juridiction</h2>
                    <p>
                      Ces conditions seront régies et interprétées conformément aux lois des États-Unis, et vous vous
                      soumettez à la juridiction non exclusive des tribunaux d'État et fédéraux situés aux États-Unis
                      pour la résolution de tout litige.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contactez-Nous</h2>
                    <p>
                      Si vous avez des questions concernant ces Conditions d'Utilisation, veuillez nous contacter à:
                    </p>
                    <p className="mt-2">
                      <strong>Email:</strong> legal@zentropicai.com
                      <br />
                      <strong>Adresse:</strong> 123 Tech Street, Suite 100, San Francisco, CA 94107
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </SectionTransition>
      </main>
      <Footer />
    </div>
  )
}
