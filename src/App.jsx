import React, { useState } from 'react';
import { 
  ShieldAlert, 
  UserCheck, 
  Database, 
  Gavel, 
  Lock, 
  Bot, 
  AlertTriangle, 
  CheckCircle2,
  ChevronRight,
  Info,
  ShieldCheck,
  EyeOff,
  Terminal
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "¿Qué organización estuvo involucrada?",
      icon: <Bot className="w-6 h-6" />,
      content: "Empresas de Retail, banca y servicios de comida rápida que implementan 'Shadow AI'. En Chile, casos similares han involucrado a grandes comercios que utilizan APIs de terceros (como OpenAI o Anthropic) sin una capa de seguridad intermedia que filtre los datos antes de salir de la red corporativa.",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "¿Qué tipo de datos se vieron afectados?",
      icon: <Database className="w-6 h-6" />,
      content: "Principalmente datos no estructurados: transcripciones de chat que contienen RUT, direcciones, teléfonos, y preferencias de consumo. El riesgo mayor es el 'Data Leakage' hacia el modelo de lenguaje, donde la información privada pasa a formar parte de la memoria del chatbot y podría ser revelada a otros usuarios.",
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "¿Qué derechos ARCO se vulneraron?",
      icon: <UserCheck className="w-6 h-6" />,
      content: "Se vulneran el Derecho de Cancelación (imposibilidad de borrar datos ya 'aprendidos' por la IA) y el Derecho de Oposición (los usuarios no consienten explícitamente que sus diálogos entrenen modelos comerciales). También se ve afectado el Derecho de Acceso al no existir claridad sobre qué fragmentos de la conversación fueron almacenados.",
      color: "bg-amber-500"
    },
    {
      id: 4,
      title: "¿Cuál fue la resolución o sanción?",
      icon: <Gavel className="w-6 h-6" />,
      content: "Aunque la ley chilena está en proceso de actualización (Ley Marco de Ciberseguridad), el SERNAC y el CPLT aplican multas basadas en la Ley 19.628. Las sanciones suelen incluir la suspensión inmediata del servicio de IA, multas por falta de seguridad en el tratamiento y la obligación de auditar los logs de entrenamiento.",
      color: "bg-red-500"
    },
    {
      id: 5,
      title: "¿Qué medidas habrían prevenido el incidente?",
      icon: <ShieldCheck className="w-6 h-6" />,
      content: "Implementación de Gateways de IA para enmascaramiento de datos (PII Redaction), uso de modelos en instancias privadas (Azure/AWS VPC), auditorías de 'Prompt Injection' y, sobre todo, una política estricta de 'Zero Retention' para datos sensibles en las APIs de terceros.",
      color: "bg-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Bot size={180} />
          </div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
              Investigación: Parte 2
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
              Filtraciones por IA y Chatbots
            </h1>
            <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
              Análisis técnico-legal sobre la exposición de datos personales en procesos de atención automatizada mediante Inteligencia Artificial Generativa.
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content: Interactive Questions */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2 mb-4 flex items-center gap-2">
              <Terminal size={16} /> Hallazgos de la Investigación
            </h2>
            {sections.map((section) => (
              <div 
                key={section.id}
                className={`group cursor-pointer transition-all duration-500 rounded-2xl border shadow-sm ${
                  activeSection === section.id 
                    ? 'bg-white border-slate-300 ring-2 ring-slate-100' 
                    : 'bg-white/70 border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl text-white shadow-lg shrink-0 transition-transform duration-300 ${section.color} ${activeSection === section.id ? 'scale-110' : ''}`}>
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold transition-colors ${activeSection === section.id ? 'text-slate-900' : 'text-slate-700'}`}>
                        {section.title}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-transform duration-300 ${activeSection === section.id ? 'rotate-90 bg-slate-800 text-white' : ''}`}>
                      <ChevronRight size={18} />
                    </div>
                  </div>
                  
                  {activeSection === section.id && (
                    <div className="mt-6 pt-6 border-t border-slate-100 text-slate-600 leading-relaxed animate-in fade-in zoom-in-95 duration-300">
                      <p className="text-lg">
                        {section.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar: Technical Insights */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/20 blur-3xl rounded-full"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <ShieldAlert className="text-white" size={20} />
                </div>
                <h2 className="text-xl font-bold tracking-tight">Análisis Crítico</h2>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase">
                    <EyeOff size={14} /> Riesgo Técnico
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Las "Alucinaciones" pueden hacer que el bot invente datos, pero el verdadero riesgo es el <strong>Context Poisoning</strong>.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                    <Lock size={14} /> Solución Top
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    El uso de <strong>Local LLMs</strong> (Modelos locales) elimina por completo la salida de datos hacia servidores externos.
                  </p>
                </div>
              </div>

              <div className="mt-10 p-5 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <Info size={16} />
                  <span className="text-[10px] font-black uppercase tracking-tighter">Nota de Seguridad</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  En Chile, la nueva Ley Marco de Ciberseguridad obligará a las empresas a reportar estos incidentes en menos de 3 horas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-800 text-sm">Estado del Caso</h4>
                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-md">BAJO FISCALIZACIÓN</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 w-[65%] h-full"></div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3">
                Investigación abierta por el SERNAC bajo la categoría de seguridad en el consumo electrónico.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 py-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <div className="flex items-center gap-4 font-medium">
            <span>CPLT.CL</span>
            <span>SERNAC.CL</span>
            <span>BCN.CL</span>
          </div>
          <div className="text-center md:text-right">
            <p className="font-bold text-slate-500">© 2024 Proyecto Seguridad de la Información</p>
            <p>Infografía Técnica - Caso: Fugas en Chatbots de IA</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;