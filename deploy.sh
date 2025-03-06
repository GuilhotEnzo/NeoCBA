#!/bin/bash

kill_truc() {
  echo "Le clone a pas marché !"
  exit 1
}

keep_going() {
	cd ..
	rm -rf cba_deploy
	git clone git@github.com:GuilhotEnzo/NeoCBA.git cba_deploy
	cd cba_deploy || kill_truc;
	git checkout gh-pages
	git pull
	rm -rf assets img json
	mv -f ../NeoCBA/dist/* ../NeoCBA/dist/.* .
  git add -A
  git commit -m "update pages"
  git push origin gh-pages
  cd ..
  rm -rf cba_deploy
  cd NeoCBA || exit
  rm -rf dist
}

npm run build

while true; do
    read -rp "Est-ce que le build a marché ? (yes/no) " yn
    case $yn in
        [Yy]* ) keep_going; break;;
        [Nn]* ) echo "skill issue"; break;;
        * ) echo "Please answer yes or no.";;
    esac
done
