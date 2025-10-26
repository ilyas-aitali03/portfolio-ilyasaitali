import { Mail, Headphones, Cpu, Target, Music, Network, Wrench, Users, Lightbulb, Radio, Mic } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Print Instructions */}
      <div className="print:hidden fixed top-4 right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-3 rounded-xl shadow-lg text-sm font-medium z-50 animate-fade-in">
        💾 Ctrl+P (Cmd+P sur Mac) pour générer le PDF
      </div>

      {/* Portfolio Container - A4 format optimized */}
      <div className="max-w-4xl mx-auto bg-white print:shadow-none">
        
        {/* Page 1: Couverture Moderne */}
        <section className="min-h-screen relative overflow-hidden px-12 py-16 print:min-h-0 print:page-break-after-always">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-80"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col items-center justify-center h-full space-y-8">
            {/* Photo Profile */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
              <img 
                src={profilePhoto}
                alt="Ilyas AIT ALI"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            <div className="text-center space-y-6">
              <div className="space-y-3">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
                  <p className="text-sm font-medium text-primary">Candidature 2025/2026</p>
                </div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
                  Ilyas AIT ALI
                </h1>
                <p className="text-lg text-muted-foreground font-light">
                  Né le 28 mai 2003 • Laâyoune, Maroc
                </p>
              </div>
              
              <div className="py-8 space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Portfolio de candidature
                </h2>
                <div className="inline-block bg-gradient-to-r from-primary to-accent p-6 rounded-2xl shadow-[var(--shadow-soft)]">
                  <p className="text-xl font-semibold text-white leading-relaxed">
                    Licence Professionnelle<br/>
                    Ingénierie du Son et Musique Interactive
                  </p>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-center space-x-4">
                <Music className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-xl italic font-light text-foreground">
                  "Unir la technique et la créativité sonore."
                </p>
                <Headphones className="w-5 h-5 text-accent animate-pulse" />
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-primary/50"></div>
            </div>
          </div>
        </section>

        {/* Page 2: Profil et Compétences */}
        <section className="min-h-screen relative px-12 py-16 print:min-h-0 print:page-break-after-always">
          {/* Vertical decorative line */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-50"></div>
          
          <div className="pl-8 space-y-10">
            {/* Profil Personnel */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-soft)]">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Profil personnel</h2>
              </div>

              <div className="bg-gradient-to-br from-secondary/50 to-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <p className="text-foreground leading-relaxed">
                  Je suis un jeune technicien spécialisé en systèmes et réseaux, passionné par 
                  la musique et la technologie. Mon objectif est d'allier mes connaissances techniques 
                  à la création sonore pour participer à des projets musicaux et multimédias innovants.
                </p>
              </div>
            </div>

            {/* Compétences Techniques */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-soft)]">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Compétences techniques</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group relative bg-white p-5 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start space-x-3">
                    <Network className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">Systèmes & Réseaux</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed break-words">
                        Installation, maintenance et sécurité
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white p-5 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start space-x-3">
                    <Wrench className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">Matériel Audio & IT</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed break-words">
                        Hardware et équipements techniques
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white p-5 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start space-x-3">
                    <Headphones className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">Logiciels Audio</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed break-words">
                        Audacity, FL Studio, Pro Tools
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white p-5 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">Rigueur & Logique</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed break-words">
                        Précision et résolution de problèmes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formation */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-primary/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Formation</h3>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Technicien Spécialisé en Infrastructure Digitale</p>
                <p className="text-sm text-muted-foreground">Option : Systèmes et Réseaux • OFPPT</p>
              </div>
            </div>
          </div>
        </section>

        {/* Page 3: Expériences et Projets */}
        <section className="min-h-screen relative px-12 py-16 print:min-h-0 print:page-break-after-always">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-50"></div>
          
          <div className="pl-8 space-y-10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-soft)]">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Expériences & Projets</h2>
            </div>

            {/* Projet OFPPT */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Projet de fin de formation
                    </h3>
                    <p className="text-sm text-primary font-medium">OFPPT</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">Installation et configuration d'un réseau local (LAN)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">Gestion d'adresses IP et maintenance du matériel</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">Application de logique rigoureuse et précision technique</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    Compétences transférables : infrastructure technique, rigueur, maintenance d'équipements professionnels
                  </p>
                </div>
              </div>
            </div>

            {/* Stage Aéroport */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-white p-6 rounded-2xl border-l-4 border-accent shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Stage professionnel
                    </h3>
                    <p className="text-sm text-accent font-medium">Aéroport Hassan I - Laâyoune</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">Maintenance du réseau informatique de l'aéroport</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">Collaboration en équipe et respect des normes techniques</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">Environnement professionnel exigeant et réglementé</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    Compétences développées : fiabilité, travail sous pression, respect des standards professionnels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page 4: Centres d'intérêt et Objectifs */}
        <section className="min-h-screen relative px-12 py-16 print:min-h-0">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-50"></div>
          
          <div className="pl-8 space-y-10">
            {/* Centres d'intérêt */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-soft)]">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Centres d'intérêt</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[var(--shadow-soft)]">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Audio & Musique</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mixage, montage audio et production sonore
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[var(--shadow-soft)]">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Technologies</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Audiovisuel et innovation numérique
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl border border-primary/20 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[var(--shadow-soft)]">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Collaboration</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Esprit d'équipe et apprentissage continu
                  </p>
                </div>
              </div>
            </div>

            {/* Objectif Professionnel */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-soft)]">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Objectif professionnel</h2>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-20 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-white to-secondary p-8 rounded-2xl border-l-4 border-primary shadow-lg">
                  <p className="text-lg text-foreground leading-relaxed font-light">
                    Devenir technicien du son capable de maîtriser les outils numériques et 
                    la production audio dans des environnements professionnels variés : studios, 
                    radios, ou multimédias.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t-2 border-border">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-soft)]">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a 
                  href="mailto:ilyassaitali03@gmail.com" 
                  className="text-lg font-medium text-primary hover:text-accent transition-colors"
                >
                  ilyassaitali03@gmail.com
                </a>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-10 blur"></div>
                <div className="relative bg-gradient-to-br from-secondary/50 to-white p-6 rounded-2xl text-center border border-primary/20">
                  <p className="text-foreground italic leading-relaxed">
                    "Je suis prêt à m'investir pleinement dans cette formation pour transformer 
                    ma passion en compétence et ma curiosité en excellence."
                  </p>
                </div>
              </div>
            </div>

            {/* Signature visuelle */}
            <div className="flex items-center justify-center space-x-3 pt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm;
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

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
