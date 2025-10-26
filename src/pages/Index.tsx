import { Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Print Instructions */}
      <div className="print:hidden fixed top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg text-sm">
        Appuyez sur Ctrl+P (Cmd+P sur Mac) pour imprimer en PDF
      </div>

      {/* Portfolio Container - A4 format optimized */}
      <div className="max-w-4xl mx-auto bg-white print:shadow-none">
        
        {/* Page 1: Couverture */}
        <section className="min-h-screen flex flex-col items-center justify-center px-12 py-16 print:min-h-0 print:page-break-after-always">
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <h1 className="text-5xl font-bold text-foreground tracking-tight">
                Ilyas AIT ALI
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Né le 28 mai 2003 à Laâyoune, Maroc
              </p>
            </div>
            
            <div className="py-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Portfolio de candidature
              </h2>
              <p className="text-lg text-foreground">
                Licence Professionnelle
              </p>
              <p className="text-lg font-medium text-foreground">
                Ingénierie du Son et Musique Interactive
              </p>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-2">Année universitaire</p>
              <p className="text-2xl font-semibold text-primary">2025 / 2026</p>
            </div>

            <div className="pt-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20"></div>
              </div>
              <p className="text-lg italic text-muted-foreground font-light">
                "Allier la technique et la créativité sonore."
              </p>
            </div>
          </div>
        </section>

        {/* Page 2: Présentation personnelle */}
        <section className="min-h-screen px-12 py-16 print:min-h-0 print:page-break-after-always">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Présentation</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Je suis un jeune technicien spécialisé en systèmes et réseaux, passionné par 
                la technologie et curieux de découvrir le monde du son et de la production musicale. 
                Je souhaite aujourd'hui développer mes compétences techniques dans un domaine créatif 
                et stimulant.
              </p>
              <p>
                Mon parcours en infrastructure digitale m'a permis d'acquérir une rigueur technique 
                et une capacité d'adaptation que je suis déterminé à mettre au service de l'ingénierie 
                du son. Je suis convaincu que mes compétences en informatique et en réseaux constituent 
                un atout précieux dans un secteur de plus en plus digitalisé.
              </p>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Compétences techniques</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-secondary/50 p-5 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Systèmes & Réseaux</h3>
                  <p className="text-sm text-muted-foreground">
                    Configuration, maintenance et sécurité des systèmes informatiques
                  </p>
                </div>

                <div className="bg-secondary/50 p-5 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Matériel Informatique</h3>
                  <p className="text-sm text-muted-foreground">
                    Connaissance approfondie du hardware et de son installation
                  </p>
                </div>

                <div className="bg-secondary/50 p-5 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Adaptation Logicielle</h3>
                  <p className="text-sm text-muted-foreground">
                    Audacity, FL Studio, Pro Tools - apprentissage rapide
                  </p>
                </div>

                <div className="bg-secondary/50 p-5 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Rigueur Technique</h3>
                  <p className="text-sm text-muted-foreground">
                    Logique, précision et méthodologie dans l'approche des projets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page 3: Expériences */}
        <section className="min-h-screen px-12 py-16 print:min-h-0 print:page-break-after-always">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Expériences & Projets</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="space-y-8">
              {/* Projet de fin de formation */}
              <div className="border-l-4 border-primary pl-6 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Projet de fin de formation
                  </h3>
                  <p className="text-sm text-muted-foreground">OFPPT</p>
                </div>

                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Installation et configuration d'un réseau local (LAN)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Gestion d'adresses IP et maintenance du matériel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Application d'une logique rigoureuse et d'une précision technique</span>
                  </li>
                </ul>

                <div className="bg-secondary/30 p-4 rounded-lg mt-4">
                  <p className="text-sm text-muted-foreground italic">
                    Ce projet m'a permis de développer ma capacité à concevoir et à maintenir 
                    des infrastructures techniques complexes, compétences transférables au domaine du son.
                  </p>
                </div>
              </div>

              {/* Stage Aéroport */}
              <div className="border-l-4 border-primary pl-6 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Stage professionnel
                  </h3>
                  <p className="text-sm text-muted-foreground">Aéroport Hassan I - Laâyoune</p>
                </div>

                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Participation à la maintenance du réseau informatique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Collaboration en équipe et respect des normes techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Expérience dans un environnement professionnel exigeant</span>
                  </li>
                </ul>

                <div className="bg-secondary/30 p-4 rounded-lg mt-4">
                  <p className="text-sm text-muted-foreground italic">
                    Cette expérience m'a appris l'importance de la fiabilité et de la précision 
                    dans un contexte professionnel où chaque détail compte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page 4: Centres d'intérêt et Objectif */}
        <section className="min-h-screen px-12 py-16 print:min-h-0">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Centres d'intérêt</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Musique & Audio</h3>
                <p className="text-sm text-muted-foreground">
                  Production sonore et montage audio
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Technologies</h3>
                <p className="text-sm text-muted-foreground">
                  Innovations numériques
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Esprit d'équipe et apprentissage
                </p>
              </div>
            </div>

            <div className="pt-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Objectif professionnel</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border-l-4 border-primary">
                <p className="text-lg text-foreground leading-relaxed">
                  Mon objectif est de devenir technicien du son capable de combiner la maîtrise 
                  des outils numériques et la créativité musicale pour travailler dans des studios, 
                  des radios ou des projets multimédia.
                </p>
              </div>
            </div>

            <div className="pt-12 border-t-2 border-border">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:ilyassaitali03@gmail.com" 
                  className="text-lg text-primary hover:underline"
                >
                  ilyassaitali03@gmail.com
                </a>
              </div>

              <div className="bg-secondary/50 p-6 rounded-lg text-center border border-border">
                <p className="text-foreground italic leading-relaxed">
                  "Je suis prêt à m'investir pleinement dans cette formation et à donner 
                  le meilleur de moi-même pour réussir dans le domaine du son."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 20mm;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .print\\:page-break-after-always {
            page-break-after: always;
          }
          
          .print\\:min-h-0 {
            min-height: 0 !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:shadow-none {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
