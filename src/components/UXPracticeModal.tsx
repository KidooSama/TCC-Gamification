import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { UXPractice } from "@/types/uxpractice";

interface UXPracticeModalProps {
  practice: UXPractice | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UXPracticeModal = ({ practice, isOpen, onClose }: UXPracticeModalProps) => {
  if (!practice) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {practice.number}. {practice.title}
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            {practice.description}
          </DialogDescription>
        </DialogHeader>
        
        {/* Imagem Ilustrativa */}
        <div className="w-full rounded-lg overflow-hidden border border-border">
          <img 
            src={practice.imageUrl} 
            alt={`Ilustração de ${practice.title}`}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        {practice.source && (
          <p className="text-sm text-muted-foreground text-center pt-2">
            Fonte: {practice.source}
          </p>
        )}

        <div className="space-y-6 pt-4">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">Base Teórica</h3>
            <p className="text-muted-foreground">{practice.theoreticalBase}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">Detalhes Completos</h3>
            <div className="space-y-3 text-muted-foreground">
              {practice.details.map((detail, index) => (
                <div key={index} className="pl-4 border-l-2 border-accent">
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
          {practice.examples && practice.examples.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Exemplos</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {practice.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
