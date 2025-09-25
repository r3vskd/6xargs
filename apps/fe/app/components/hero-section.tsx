"use client";

import { Button } from "~/components/ui/button";
import { InteractiveGrid } from "~/components/ui/interactive-grid";
import { ShineBorder } from "~/components/ui/shine-border";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-32">
      <InteractiveGrid 
        pointColor="255, 255, 255" /*para ajustar color lineas y puntos efecto backgorund*/
        lineColor="255, 255, 255"
        pointOpacity={0.3}
        lineOpacity={0.15}
      />
      
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
        <div className="border border-gray-300/20 rounded-2xl p-8 bg-black/10 backdrop-blur-sm group relative overflow-hidden">
          <ShineBorder
            className="relative mx-auto text-center"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div className="space-y-16">
              {/* Sección del título y botones */}
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Transform Your Images with{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    AI Magic
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Professional image editing powered by artificial intelligence.
                  Crop, enhance, and transform your photos in seconds.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                    Download Free
                  </Button>
                </div>
              </div>

              {/* Sección de la imagen */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20image.jpg-mE5vAT4d864MlVhdkcrk1Vn2WcNONq.jpeg"
                  alt="Background Gradient"
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
                  <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl w-[99%] h-[85%] flex pointer-events-auto">
                    <div className="flex-1 pr-1">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Browser-HZNDOssbyLixIa4lABR27yelWXveQ0.png"
                        alt="Browser Preview"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex-1 pl-1">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Editor%20Window-sJ4sXlXpgDhv7gLvQylqH5VTb3L0rc.png"
                        alt="Code Editor"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ShineBorder>
        </div>
      </div>
    </section>
  );
}