import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Info, Search } from "lucide-react";
import { UXPracticeModal } from "@/components/UXPracticeModal";
import { uxPractices } from "@/data/uxPractices";
import { UXPractice } from "@/types/uxpractice";
import { PracticeIcon } from "@/components/PracticeIcon";
const Index = () => {
  const [selectedPractice, setSelectedPractice] = useState<UXPractice | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleDetailsClick = (practice: UXPractice) => {
    setSelectedPractice(practice);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPractice(null), 300);
  };

  const filteredPractices = useMemo(() => {
    if (!searchTerm.trim()) return uxPractices;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return uxPractices.filter((practice) => {
      return (
        practice.title.toLowerCase().includes(lowerSearchTerm) ||
        practice.description.toLowerCase().includes(lowerSearchTerm) ||
        practice.theoreticalBase.toLowerCase().includes(lowerSearchTerm) ||
        practice.details.some(item => 
          item.toLowerCase().includes(lowerSearchTerm)
        ) ||
        (practice.examples && practice.examples.some(example => 
          example.toLowerCase().includes(lowerSearchTerm)
        ))
      );
    });
  }, [searchTerm]);
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="text-primary-foreground py-6 px-4 shadow-lg bg-slate-200">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800">
            Guia de Boas Práticas em Gamificação
          </h1>
          <p className="text-center mt-2 text-slate-500">
            Princípios para criar experiências excepcionais
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por título, descrição, base teórica..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background border-border text-foreground"
              />
            </div>
            {searchTerm && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {filteredPractices.length} {filteredPractices.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Grid Container - Desktop */}
      <main className="w-full">
        {/* Desktop View - Hidden on mobile */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Column Headers */}
            <div className="grid grid-cols-5 bg-background border-b-2 border-border sticky top-0 z-10">
              <div className="bg-grid-col1 text-secondary-foreground p-4 font-mono font-medium text-center border-r border-background uppercase tracking-wider">
                Ícone
              </div>
              <div className="bg-grid-col2 text-secondary-foreground p-4 font-mono font-medium text-center border-r border-background uppercase tracking-wider">
                Boa Prática
              </div>
              <div className="bg-grid-col3 text-secondary-foreground p-4 font-mono font-medium text-center border-r border-background uppercase tracking-wider">
                Descrição
              </div>
              <div className="bg-grid-col4 text-white p-4 font-mono font-medium text-center border-r border-background uppercase tracking-wider">
                Base Teórica
              </div>
              <div className="bg-grid-col5 text-white p-4 font-mono font-medium text-center uppercase tracking-wider">
                Detalhes
              </div>
            </div>

            {/* Grid Rows */}
            <div className="divide-y divide-border">
              {filteredPractices.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  Nenhuma prática encontrada para "{searchTerm}"
                </div>
              ) : (
                filteredPractices.map((practice, index) => (
                  <div key={practice.number} className={`grid grid-cols-5 hover:bg-muted/50 transition-all duration-200 hover:shadow-sm ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                    {/* Icon */}
                    <div className="p-4 flex items-center justify-center border-r border-border bg-card">
                      <PracticeIcon number={practice.number} />
                    </div>

                    {/* Title */}
                    <div className="p-4 flex items-center border-r border-border bg-card">
                      <h3 className="font-semibold text-foreground">
                        {practice.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="p-4 flex items-center border-r border-border bg-card">
                      <p className="text-sm text-muted-foreground">
                        {practice.description}
                      </p>
                    </div>

                    {/* Theoretical Base */}
                    <div className="p-4 flex items-center border-r border-border bg-card">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {practice.theoreticalBase}
                      </p>
                    </div>

                    {/* Details Button */}
                    <div className="p-4 flex items-center justify-center bg-card">
                      <Button onClick={() => handleDetailsClick(practice)} variant="outline" size="sm" className="gap-2 hover:bg-muted hover:text-foreground transition-all duration-200">
                        <Info className="w-4 h-4" />
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Cards */}
        <div className="lg:hidden px-4 py-6 space-y-4">
          {filteredPractices.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              Nenhuma prática encontrada para "{searchTerm}"
            </div>
          ) : (
            filteredPractices.map((practice, index) => (
              <div key={practice.number} className={`rounded-lg border border-border overflow-hidden animate-fade-in hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`} style={{
                animationDelay: `${index * 50}ms`
              }}>
                <div className="p-4 space-y-3">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <PracticeIcon number={practice.number} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        {practice.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {practice.description}
                      </p>
                    </div>
                  </div>

                  {/* Theoretical Base - Mobile */}
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      Base Teórica
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {practice.theoreticalBase}
                    </p>
                  </div>

                  {/* Details Button */}
                  <Button onClick={() => handleDetailsClick(practice)} variant="outline" size="sm" className="w-full gap-2 hover:bg-muted hover:text-foreground transition-all duration-200">
                    <Info className="w-4 h-4" />
                    Ver Detalhes Completos
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-primary-foreground py-6 px-4 mt-12 bg-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2025 Guia de Gamificação - Desenvolvido com foco na experiência do usuário
          </p>
        </div>
      </footer>

      {/* Modal */}
      <UXPracticeModal practice={selectedPractice} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>;
};
export default Index;