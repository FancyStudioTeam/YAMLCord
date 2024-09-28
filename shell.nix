{
  pkgs ? import <nixpkgs> {}
}: pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.pnpm
    pkgs.biome 
  ];
  
  shellHook = ''
    export NODE_ENV=development
    export IN_NIX_SHELL=1
    export BIOME_BIN=$(which biome)
    echo "You are now ready for development! Yay!"
  '';
}
