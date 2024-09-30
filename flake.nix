{
  description = "YAMLCord - Nix flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShell = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.pnpm
            pkgs.biome 
          ];
          
          shellHook = ''
            export NODE_ENV=development
            export IN_NIX_SHELL=1
            export BIOME_BIN_PATH=$(which biome)
            echo "You are now ready for development! Yay!"
          '';
        };
      });
}
