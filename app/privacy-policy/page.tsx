"use client"

import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SectionTransition className="pt-32 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-8">
                {language === "en" ? "Privacy Policy" : "Politique de Confidentialité"}
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
                      Welcome to Zentropic AI. We respect your privacy and are committed to protecting your personal
                      data. This privacy policy will inform you about how we look after your personal data when you
                      visit our website and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. The Data We Collect About You</h2>
                    <p>
                      Personal data, or personal information, means any information about an individual from which that
                      person can be identified. We may collect, use, store and transfer different kinds of personal data
                      about you which we have grouped together as follows:
                    </p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>
                        <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
                      </li>
                      <li>
                        <strong>Contact Data</strong> includes email address and telephone numbers.
                      </li>
                      <li>
                        <strong>Technical Data</strong> includes internet protocol (IP) address, your login data,
                        browser type and version, time zone setting and location, browser plug-in types and versions,
                        operating system and platform, and other technology on the devices you use to access this
                        website.
                      </li>
                      <li>
                        <strong>Usage Data</strong> includes information about how you use our website, products and
                        services.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Personal Data</h2>
                    <p>
                      We will only use your personal data when the law allows us to. Most commonly, we will use your
                      personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>
                        Where we need to perform the contract we are about to enter into or have entered into with you.
                      </li>
                      <li>
                        Where it is necessary for our legitimate interests (or those of a third party) and your
                        interests and fundamental rights do not override those interests.
                      </li>
                      <li>Where we need to comply with a legal obligation.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
                    <p>
                      We have put in place appropriate security measures to prevent your personal data from being
                      accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we
                      limit access to your personal data to those employees, agents, contractors and other third parties
                      who have a business need to know.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
                    <p>
                      We will only retain your personal data for as long as reasonably necessary to fulfill the purposes
                      we collected it for, including for the purposes of satisfying any legal, regulatory, tax,
                      accounting or reporting requirements.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Legal Rights</h2>
                    <p>
                      Under certain circumstances, you have rights under data protection laws in relation to your
                      personal data, including:
                    </p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>The right to request access to your personal data.</li>
                      <li>The right to request correction of your personal data.</li>
                      <li>The right to request erasure of your personal data.</li>
                      <li>The right to object to processing of your personal data.</li>
                      <li>The right to request restriction of processing your personal data.</li>
                      <li>The right to request transfer of your personal data.</li>
                      <li>The right to withdraw consent.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
                    <p>
                      If you have any questions about this privacy policy or our privacy practices, please contact us
                      at:
                    </p>
                    <p className="mt-2">
                      <strong>Email:</strong> privacy@zentropicai.com
                      <br />
                      <strong>Address:</strong> 123 Tech Street, Suite 100, San Francisco, CA 94107
                    </p>
                  </>
                ) : (
                  // French content
                  <>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                    <p>
                      Bienvenue chez Zentropic AI. Nous respectons votre vie privée et nous nous engageons à protéger
                      vos données personnelles. Cette politique de confidentialité vous informera sur la façon dont nous
                      prenons soin de vos données personnelles lorsque vous visitez notre site web et vous informera de
                      vos droits à la vie privée et de la façon dont la loi vous protège.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">
                      2. Les Données Que Nous Collectons À Votre Sujet
                    </h2>
                    <p>
                      Les données personnelles, ou informations personnelles, désignent toute information concernant un
                      individu à partir de laquelle cette personne peut être identifiée. Nous pouvons collecter,
                      utiliser, stocker et transférer différents types de données personnelles vous concernant, que nous
                      avons regroupées comme suit:
                    </p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>
                        <strong>Données d'identité</strong> comprennent le prénom, le nom, le nom d'utilisateur ou un
                        identifiant similaire.
                      </li>
                      <li>
                        <strong>Données de contact</strong> comprennent l'adresse e-mail et les numéros de téléphone.
                      </li>
                      <li>
                        <strong>Données techniques</strong> comprennent l'adresse de protocole Internet (IP), vos
                        données de connexion, le type et la version du navigateur, le réglage du fuseau horaire et
                        l'emplacement, les types et versions des plug-ins du navigateur, le système d'exploitation et la
                        plateforme, et d'autres technologies sur les appareils que vous utilisez pour accéder à ce site
                        web.
                      </li>
                      <li>
                        <strong>Données d'utilisation</strong> comprennent des informations sur la façon dont vous
                        utilisez notre site web, nos produits et services.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">
                      3. Comment Nous Utilisons Vos Données Personnelles
                    </h2>
                    <p>
                      Nous n'utiliserons vos données personnelles que lorsque la loi nous y autorise. Le plus souvent,
                      nous utiliserons vos données personnelles dans les circonstances suivantes:
                    </p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>
                        Lorsque nous devons exécuter le contrat que nous sommes sur le point de conclure ou que nous
                        avons conclu avec vous.
                      </li>
                      <li>
                        Lorsque cela est nécessaire pour nos intérêts légitimes (ou ceux d'un tiers) et que vos intérêts
                        et droits fondamentaux ne l'emportent pas sur ces intérêts.
                      </li>
                      <li>Lorsque nous devons nous conformer à une obligation légale.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sécurité Des Données</h2>
                    <p>
                      Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données
                      personnelles ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée,
                      modifiées ou divulguées. De plus, nous limitons l'accès à vos données personnelles aux employés,
                      agents, contractants et autres tiers qui ont un besoin professionnel de les connaître.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Conservation Des Données</h2>
                    <p>
                      Nous ne conserverons vos données personnelles que le temps raisonnablement nécessaire pour
                      atteindre les objectifs pour lesquels nous les avons collectées, y compris pour satisfaire à toute
                      exigence légale, réglementaire, fiscale, comptable ou de déclaration.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Vos Droits Légaux</h2>
                    <p>
                      Dans certaines circonstances, vous disposez de droits en vertu des lois sur la protection des
                      données concernant vos données personnelles, notamment:
                    </p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>Le droit de demander l'accès à vos données personnelles.</li>
                      <li>Le droit de demander la correction de vos données personnelles.</li>
                      <li>Le droit de demander l'effacement de vos données personnelles.</li>
                      <li>Le droit de s'opposer au traitement de vos données personnelles.</li>
                      <li>Le droit de demander la limitation du traitement de vos données personnelles.</li>
                      <li>Le droit de demander le transfert de vos données personnelles.</li>
                      <li>Le droit de retirer votre consentement.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contactez-Nous</h2>
                    <p>
                      Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en
                      matière de confidentialité, veuillez nous contacter à:
                    </p>
                    <p className="mt-2">
                      <strong>Email:</strong> privacy@zentropicai.com
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
